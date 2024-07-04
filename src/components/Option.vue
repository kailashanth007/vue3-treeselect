<template>
  <div :class="{
    'vue-treeselect__list-item': true,
        [`vue-treeselect__indent-level-${instance.shouldFlattenOptions ? 0 : node.level}`]: true,
    }">
    <div :class="{
       'vue-treeselect__option': true,
          'vue-treeselect__option--disabled': node.isDisabled,
          'vue-treeselect__option--selected': instance.isSelected(node),
          'vue-treeselect__option--highlight': node.isHighlighted,
          'vue-treeselect__option--matched': instance.localSearch.active && node.isMatched,
          'vue-treeselect__option--hide': !shouldShow,
    }" @mouseenter="handleMouseEnterOption" :data-id="node.id">
      <template v-if="!(instance.shouldFlattenOptions && this.shouldShow)">
        <div v-if="node.isBranch" class="vue-treeselect__option-arrow-container" @mousedown="handleMouseDownOnArrow">
              <ArrowIcon :class="{
                  'vue-treeselect__option-arrow': true,
                  'vue-treeselect__option-arrow--rotated': shouldExpand,
                }"/>
        </div>
        <template v-if="instance.hasBranchNodes">
          <div class="vue-treeselect__option-arrow-placeholder">&nbsp;</div>
        </template>
      </template>
      <div class="vue-treeselect__label-container" @mousedown="handleMouseDownOnLabelContainer">
        <template v-if="!isSingle && !(instance.disableBranchNodes && node.isBranch)">
          <div class="vue-treeselect__checkbox-container">
            <span :class="{ 'vue-treeselect__checkbox': true,
          'vue-treeselect__checkbox--checked': checkedState === CHECKED,
          'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
          'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
          'vue-treeselect__checkbox--disabled': node.isDisabled, }">
            <span class="vue-treeselect__check-mark" />
            <span class="vue-treeselect__minus-mark" />
          </span>
          </div>
        </template>
          <slot v-if="$slots['option-label']" name="option-label"
                :node="node"
                :shouldShowCount="shouldShowCount"
                :count="getCount()" />
        <template v-else>
          <label :class="'vue-treeselect__label'">
            {{ node.label }}
            <template v-if="shouldShowCount">
              <span :class="'vue-treeselect__count'">({ getCount() })</span>
            </template>
          </label>
        </template>
      </div>
    </div>
    <div v-if="node.isBranch && shouldExpand">
      <Transition name="vue-treeselect__list--transition">
        <div class="vue-treeselect__list">
          <template v-if="childrenStatesLoaded">
            <VueTreeselectOption v-for="childNode in node.children" :node="childNode" :key="childNode.id">
              <template v-if="$slots['option-label']" #option-label="{ node, shouldShowCount, count }">
                <slot name="option-label"
                      :node="node"
                      :shouldShowCount="shouldShowCount"
                      :count="count" />
              </template>
            </VueTreeselectOption>
          </template>
          <template v-else>
            <template v-if="node.childrenStates.isLoaded && !node.children.length">
              <Tip type="no-children" icon="warning">{{ instance.noChildrenText }}</Tip>
            </template>
            <template v-if="node.childrenStates.isLoading">
              <Tip type="loading" icon="loader">{{ instance.loadingText }}</Tip>
            </template>
            <template v-if="node.childrenStates.loadingError">
              <Tip type="error" icon="error">
                { node.childrenStates.loadingError }
                <a class="vue-treeselect__retry" :title="instance.retryTitle" @mousedown="handleMouseDownOnRetry">
                  {{ instance.retryText }}
                </a>
              </Tip>
            </template>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>


<script>
  import { UNCHECKED, INDETERMINATE, CHECKED } from '../constants'
  import { onLeftClick } from '../utils'
  import Tip from '@/components/Tip.vue'
  import ArrowIcon from '@/components/icons/Arrow.vue'
  import { Transition } from "vue";

  let arrowPlaceholder, checkMark, minusMark

  export default {
    name: 'VueTreeselectOption',
    inject: [ 'instance' ],
    components: { ArrowIcon, Transition, Tip },
    props: {
      node: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        UNCHECKED, INDETERMINATE, CHECKED
      }
    },
    computed: {
      isSingle() {
        return this.instance.single.value;
      },
      shouldExpand() {
        const { instance, node } = this

        return node.isBranch && instance.shouldExpand(node)
      },

      shouldShow() {
        const { instance, node } = this
        return instance.shouldShowOptionInMenu(node)
      },
      checkedState() {
        return this.instance.forest.checkedStateMap[this.node.id]
      },
      shouldShowCount() {
        return this.node.isBranch && (this.instance.localSearch.active
            ? this.instance.showCountOnSearchComputed
            : this.instance.showCount)
      },
      childrenStatesLoaded() {
        return this.node.childrenStates.isLoaded;
      }
    },

    methods: {
      getCount() {
        return this.shouldShowCount
            ? this.instance.localSearch.active
                ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf]
                : this.node.count[this.instance.showCountOf]
            : NaN
      },

      handleMouseEnterOption(evt) {
        const { instance, node } = this

        // Equivalent to `self` modifier.
        // istanbul ignore next
        if (evt.target !== evt.currentTarget) return

        instance.setCurrentHighlightedOption(node, false)
      },

      handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
        const { instance, node } = this
        instance.toggleExpanded(node)
      }),

      handleMouseDownOnLabelContainer: onLeftClick(function handleMouseDownOnLabelContainer() {
        const { instance, node } = this

        if (node.isBranch && instance.disableBranchNodes) {
          instance.toggleExpanded(node)
        } else {
          instance.select(node)
        }
      }),

      handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry() {
        const { instance, node } = this
        instance.loadChildrenOptions(node)
      }),
    },
  }
</script>
