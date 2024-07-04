<template>
  <div class="vue-treeselect__multi-value-item-container">
    <div :class="itemClass" @mousedown="handleMouseDown">
      <slot v-if="$slots['value-label']" name="value-label"
            :node="node" />
      <template v-else>
        {{ node.label }}
      </template>
      <span class="vue-treeselect__icon vue-treeselect__value-remove"><DeleteIcon /></span>
    </div>
  </div>
</template>

<script>
  import { onLeftClick } from '../utils'
  import DeleteIcon from '@/components/icons/Delete.vue'

  export default {
    name: 'vue-treeselect--multi-value-item',
    inject: [ 'instance' ],
    components: { DeleteIcon },

    props: {
      node: {
        type: Object,
        required: true,
      },
    },
    computed: {
      itemClass() {
        return {
          'vue-treeselect__multi-value-item': true,
          'vue-treeselect__multi-value-item-disabled': this.node.isDisabled,
          'vue-treeselect__multi-value-item-new': this.node.isNew,
        }
      }
    },
    methods: {
      handleMouseDown: onLeftClick(function handleMouseDown() {
        const { instance, node } = this

        // Deselect this node.
        instance.select(node)
      }),
    },
  }
</script>
