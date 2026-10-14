<script lang="jsx">
  import { MENU_BUFFER } from '../constants'
  import { watchSize, setupResizeAndScrollEventListeners, onLeftClick } from '../utils'
  import Option from './Option'
  import Tip from './Tip'

  const directionMap = {
    top: 'top',
    bottom: 'bottom',
    above: 'top',
    below: 'bottom',
  }

  export default {
    name: 'vue-treeselect--menu',
    inject: [ 'instance' ],

    data() {
      return {
        // Index of the first row inside the visible area of the menu (virtual scrolling).
        virtualFirstRow: 0,
        // Height of the visible area of the menu (virtual scrolling).
        virtualViewportHeight: this.instance.maxHeight,
      }
    },

    computed: {
      menuStyle() {
        const { instance } = this

        return {
          maxHeight: instance.maxHeight + 'px',
        }
      },

      virtualRowCount() {
        const { instance } = this

        // Only computed when virtual scrolling is enabled.
        return instance.virtual ? instance.virtualRows.length : 0
      },

      menuContainerStyle() {
        const { instance } = this

        return {
          zIndex: instance.appendToBody ? null : instance.zIndex,
        }
      },
    },

    watch: {
      'instance.menu.isOpen'(newValue) {
        if (newValue) {
          // In case `openMenu()` is just called and the menu is not rendered yet.
          this.$nextTick(this.onMenuOpen)
        } else {
          this.onMenuClose()
        }
      },

      virtualRowCount() {
        // The list may have shrunk (e.g. when searching), re-measure after rendering.
        if (this.instance.virtual) this.$nextTick(this.updateVirtualScroll)
      },
    },

    created() {
      this.menuSizeWatcher = null
      this.menuResizeAndScrollEventListeners = null
    },

    mounted() {
      const { instance } = this

      if (instance.menu.isOpen) this.$nextTick(this.onMenuOpen)
    },

    unmounted() {
      this.onMenuClose()
    },

    methods: {
      renderMenu() {
        const { instance } = this

        if (!instance.menu.isOpen) return null

        return (
          <div ref="menu" class="vue-treeselect__menu" onMousedown={instance.handleMouseDown} onScroll={this.handleMenuScroll} style={this.menuStyle}>
            {this.renderBeforeList()}
            {instance.async
              ? this.renderAsyncSearchMenuInner()
              : instance.localSearch.active
                ? this.renderLocalSearchMenuInner()
                : this.renderNormalMenuInner()}
            {this.renderAfterList()}
          </div>
        )
      },

      renderBeforeList() {
        const { instance } = this
        const beforeListRenderer = instance.$slots['before-list']

        return beforeListRenderer
          ? beforeListRenderer()
          : null
      },

      renderAfterList() {
        const { instance } = this
        const afterListRenderer = instance.$slots['after-list']

        return afterListRenderer
          ? afterListRenderer()
          : null
      },

      renderNormalMenuInner() {
        const { instance } = this

        if (instance.rootOptionsStates.isLoading) {
          return this.renderLoadingOptionsTip()
        } else if (instance.rootOptionsStates.loadingError) {
          return this.renderLoadingRootOptionsErrorTip()
        } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
          return this.renderNoAvailableOptionsTip()
        } else {
          return this.renderOptionList()
        }
      },

      renderLocalSearchMenuInner() {
        const { instance } = this

        if (instance.rootOptionsStates.isLoading) {
          return this.renderLoadingOptionsTip()
        } else if (instance.rootOptionsStates.loadingError) {
          return this.renderLoadingRootOptionsErrorTip()
        } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
          return this.renderNoAvailableOptionsTip()
        } else if (instance.localSearch.noResults) {
          return this.renderNoResultsTip()
        } else {
          return this.renderOptionList()
        }
      },

      renderAsyncSearchMenuInner() {
        const { instance } = this
        const entry = instance.getRemoteSearchEntry()
        const shouldShowSearchPromptTip = instance.trigger.searchQuery === '' && !instance.defaultOptions
        const shouldShowNoResultsTip = shouldShowSearchPromptTip
          ? false
          : entry.isLoaded && entry.options.length === 0

        if (shouldShowSearchPromptTip) {
          return this.renderSearchPromptTip()
        } else if (entry.isLoading) {
          return this.renderLoadingOptionsTip()
        } else if (entry.loadingError) {
          return this.renderAsyncSearchLoadingErrorTip()
        } else if (shouldShowNoResultsTip) {
          return this.renderNoResultsTip()
        } else {
          return this.renderOptionList()
        }
      },

      renderOptionList() {
        const { instance } = this

        if (instance.virtual) return this.renderVirtualOptionList()

        return (
          <div class="vue-treeselect__list">
            {instance.forest.normalizedOptions.map(rootNode => (
              <Option node={rootNode} key={rootNode.id} />
            ))}
          </div>
        )
      },

      renderVirtualOptionList() {
        const { instance } = this
        const rows = instance.virtualRows
        const rowHeight = instance.virtualRowHeight
        const visibleCount = Math.ceil(this.virtualViewportHeight / rowHeight) + 1
        // Clamp in case the list has shrunk since the last scroll measurement.
        const firstRow = Math.min(this.virtualFirstRow, Math.max(0, rows.length - visibleCount))
        const start = Math.max(0, firstRow - instance.virtualBuffer)
        const end = Math.min(rows.length, firstRow + visibleCount + instance.virtualBuffer)

        return (
          <div ref="virtual-list" class="vue-treeselect__list vue-treeselect__list--virtual" style={{ height: rows.length * rowHeight + 'px' }}>
            <div class="vue-treeselect__virtual-window" style={{ transform: `translateY(${start * rowHeight}px)` }}>
              {rows.slice(start, end).map(this.renderVirtualRow)}
            </div>
          </div>
        )
      },

      renderVirtualRow(row) {
        const { instance } = this

        if (row.type === 'option') {
          return <Option node={row.node} key={row.key} virtual={true} />
        }

        // Tips are indented one level deeper than their parent branch node (see styles).
        const indentLevel = instance.shouldFlattenOptions ? 0 : row.node.level

        return (
          <div
            class={`vue-treeselect__list-item vue-treeselect__indent-level-${indentLevel}`}
            key={row.key}
            style={{ height: instance.virtualRowHeight + 'px' }}
          >
            {this.renderVirtualTip(row)}
          </div>
        )
      },

      renderVirtualTip({ type, node }) {
        const { instance } = this

        if (type === 'no-children') {
          return <Tip type="no-children" icon="warning">{ instance.noChildrenText }</Tip>
        }
        if (type === 'loading') {
          return <Tip type="loading" icon="loader">{ instance.loadingText }</Tip>
        }

        return (
          <Tip type="error" icon="error">
            { node.childrenStates.loadingError }
            <a class="vue-treeselect__retry" title={instance.retryTitle} onMousedown={evt => this.handleMouseDownOnRetry(evt, node)}>
              { instance.retryText }
            </a>
          </Tip>
        )
      },

      handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry(evt, node) {
        this.instance.loadChildrenOptions(node)
      }),

      handleMenuScroll() {
        if (this.instance.virtual) this.updateVirtualScroll()
      },

      updateVirtualScroll() {
        const $menu = this.$refs.menu
        const $list = this.$refs['virtual-list']
        if (!$menu || !$list) return

        // Offset of the list inside the menu (menu padding, "before-list" slot).
        const scrollTopInList = Math.max(0, $menu.scrollTop - $list.offsetTop)
        const firstRow = Math.floor(scrollTopInList / this.instance.virtualRowHeight)

        // Only update when needed, to avoid re-rendering on every scroll event.
        if (firstRow !== this.virtualFirstRow) this.virtualFirstRow = firstRow
        if ($menu.clientHeight && $menu.clientHeight !== this.virtualViewportHeight) {
          this.virtualViewportHeight = $menu.clientHeight
        }
      },

      renderSearchPromptTip() {
        const { instance } = this

        return (
          <Tip type="search-prompt" icon="warning">{ instance.searchPromptText }</Tip>
        )
      },

      renderLoadingOptionsTip() {
        const { instance } = this

        return (
          <Tip type="loading" icon="loader">{ instance.loadingText }</Tip>
        )
      },

      renderLoadingRootOptionsErrorTip() {
        const { instance } = this

        return (
          <Tip type="error" icon="error">
            { instance.rootOptionsStates.loadingError }
            <a class="vue-treeselect__retry" onClick={instance.loadRootOptions} title={instance.retryTitle}>
              { instance.retryText }
            </a>
          </Tip>
        )
      },

      renderAsyncSearchLoadingErrorTip() {
        const { instance } = this
        const entry = instance.getRemoteSearchEntry()

        // TODO: retryTitle?

        return (
          <Tip type="error" icon="error">
            { entry.loadingError }
            <a class="vue-treeselect__retry" onClick={instance.handleRemoteSearch} title={instance.retryTitle}>
              { instance.retryText }
            </a>
          </Tip>
        )
      },

      renderNoAvailableOptionsTip() {
        const { instance } = this

        return (
          <Tip type="no-options" icon="warning">{ instance.noOptionsText }</Tip>
        )
      },

      renderNoResultsTip() {
        const { instance } = this
        return (
          <Tip type="no-results" icon="warning">{ instance.noResultsText }</Tip>
        )
      },

      onMenuOpen() {
        if (this.instance.virtual) this.updateVirtualScroll()
        this.adjustMenuOpenDirection()
        this.setupMenuSizeWatcher()
        this.setupMenuResizeAndScrollEventListeners()
      },

      onMenuClose() {
        this.removeMenuSizeWatcher()
        this.removeMenuResizeAndScrollEventListeners()
      },

      adjustMenuOpenDirection() {
        const { instance } = this
        if (!instance.menu.isOpen) return

        const $menu = instance.getMenu()
        const $control = instance.getControl()
        const menuRect = $menu.getBoundingClientRect()
        const controlRect = $control.getBoundingClientRect()
        const menuHeight = menuRect.height
        const viewportHeight = window.innerHeight
        const spaceAbove = controlRect.top
        const spaceBelow = window.innerHeight - controlRect.bottom
        const isControlInViewport = (
          (controlRect.top >= 0 && controlRect.top <= viewportHeight) ||
          (controlRect.top < 0 && controlRect.bottom > 0)
        )
        const hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER
        const hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER

        if (!isControlInViewport) {
          instance.closeMenu()
        } else if (instance.openDirection !== 'auto') {
          instance.menu.placement = directionMap[instance.openDirection]
        } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
          instance.menu.placement = 'bottom'
        } else {
          instance.menu.placement = 'top'
        }
      },

      setupMenuSizeWatcher() {
        const { instance } = this
        const $menu = instance.getMenu()

        // istanbul ignore next
        if (this.menuSizeWatcher) return

        this.menuSizeWatcher = {
          remove: watchSize($menu, this.adjustMenuOpenDirection),
        }
      },

      setupMenuResizeAndScrollEventListeners() {
        const { instance } = this
        const $control = instance.getControl()

        // istanbul ignore next
        if (this.menuResizeAndScrollEventListeners) return

        this.menuResizeAndScrollEventListeners = {
          remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection),
        }
      },

      removeMenuSizeWatcher() {
        if (!this.menuSizeWatcher) return

        this.menuSizeWatcher.remove()
        this.menuSizeWatcher = null
      },

      removeMenuResizeAndScrollEventListeners() {
        if (!this.menuResizeAndScrollEventListeners) return

        this.menuResizeAndScrollEventListeners.remove()
        this.menuResizeAndScrollEventListeners = null
      },
    },

    render() {
      return (
        <div ref="menu-container" class="vue-treeselect__menu-container" style={this.menuContainerStyle}>
          <transition name="vue-treeselect__menu--transition">
            {this.renderMenu()}
          </transition>
        </div>
      )
    },
  }
</script>
