<template>
  <div class="vue-treeselect__control" @mousedown="instance.handleMouseDown" @click="handleClick">
    <template v-if="isSingle">
      <SingleValue ref="value-container">
        <template v-if="$slots['value-label']" #value-label="{ node }">
          <slot name="value-label"
                :node="node"/>
        </template>
      </SingleValue>
    </template>
    <template v-else>
      <MultiValue ref="value-container">
        <template v-if="$slots['value-label']" #value-label="{ node }">
          <slot name="value-label"
                :node="node"/>
        </template>
      </MultiValue>
    </template>
    <div v-if="shouldShowX" class="vue-treeselect__x-container" :title="getTitleX()" @mousedown="handleMouseDownOnX">
      <DeleteIcon class="vue-treeselect__x" />
    </div>
    <div class="vue-treeselect__control-arrow-container" @mousedown="handleMouseDownOnArrow">
      <ArrowIcon :class="getArrowClass()" />
    </div>
  </div>
</template>

<script>
  import { onLeftClick, isPromise } from '../utils'
  import SingleValue from '@/components/SingleValue.vue'
  import MultiValue from '@/components/MultiValue.vue'
  import DeleteIcon from '@/components/icons/Delete.vue'
  import ArrowIcon from '@/components/icons/Arrow.vue'

  export default {
    name: 'vue-treeselect--control',
    inject: [ 'instance' ],
    components: { SingleValue,
      MultiValue,
      DeleteIcon,
      ArrowIcon
    },
    data() {
      return {
        SingleValue, MultiValue,
      }
    },
    computed: {
      isSingle() {
        return this.instance.single.value
      },
      /* eslint-disable valid-jsdoc */
      /**
       * Should show the "×" button that resets value?
       * @return {boolean}
       */
      shouldShowX() {
        const { instance } = this

        return (
          instance.clearable &&
          !instance.disabled &&
          instance.hasValue &&
          (this.hasUndisabledValue || instance.allowClearingDisabled)
        )
      },

      /**
       * Should show the arrow button that toggles menu?
       * @return {boolean}
       */
      shouldShowArrow() {
        const { instance } = this

        if (!instance.alwaysOpen) return true
        // Even with `alwaysOpen: true`, sometimes the menu is still closed,
        // e.g. when the control is disabled.
        return !instance.menu.isOpen
      },

      /**
       * Has any undisabled option been selected?
       * @type {boolean}
       */
      hasUndisabledValue() {
        const { instance } = this

        return (
          instance.hasValue &&
          instance.internalValue.value.some(id => !instance.getNode(id).isDisabled)
        )
      },
      /* eslint-enable valid-jsdoc */
    },
    methods: {
      getTitleX() {
        return this.instance.multiple ? this.instance.clearAllText : this.instance.clearValueText;
      },
      getArrowClass() {
        return {
          'vue-treeselect__control-arrow': true,
          'vue-treeselect__control-arrow--rotated': this.instance.menu.isOpen,
        }
      },

      handleMouseDownOnX: onLeftClick(function handleMouseDownOnX(evt) {
        /**
         * We don't use async/await here because we don't want
         * to rely on Babel polyfill or regenerator runtime.
         * See: https://babeljs.io/docs/plugins/transform-regenerator/
         * We also don't want to assume there is a global `Promise`
         * class, since we are targeting to support IE9 without the
         * need of any polyfill.
         */

        evt.stopPropagation()
        evt.preventDefault()

        const { instance } = this
        const result = instance.beforeClearAll()
        const handler = shouldClear => {
          if (shouldClear) instance.clear()
        }

        if (isPromise(result)) {
          // The handler will be called async.
          result.then(handler)
        } else {
          // Keep the same behavior here.
          setTimeout(() => handler(result), 0)
          // Also, note that IE9 requires:
          //   setTimeout(() => fn(...args), delay)
          // Instead of:
          //   setTimeout(fn, delay, ...args)
        }
      }),

      handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
        evt.preventDefault()
        evt.stopPropagation()

        const { instance } = this

        // Focus the input or prevent blurring.
        instance.focusInput()
      }),

      handleClick() {
        const { instance } = this
        instance.toggleMenu()
      }

      // This is meant to be called by child `<Value />` component.
    },
  }
</script>
