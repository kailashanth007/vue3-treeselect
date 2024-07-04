<template>
  <MultiValueItem v-for="node in multiValueItems" :key="`multi-value-item-${node.id}`" :node="node">
    <template v-if="$slots['value-label']" #value-label="{ node }">
      <slot name="value-label"
            :node="node" />
    </template>
  </MultiValueItem>
    <div v-if="count > 0" class="vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off" key="exceed-limit-tip">
      <span class="vue-treeselect__limit-tip-text">{{ instance.limitText(count) }}</span>
    </div>
    <Placeholder key="placeholder" v-if="!hasValue && !isFocused" />
    <Input ref="input" key="input" />
</template>

<script>
  import MultiValueItem from '@/components/MultiValueItem.vue'
  import Input from '@/components/Input.vue'
  import Placeholder from '@/components/Placeholder.vue'
  import { TransitionGroup } from "vue";

  export default {
    name: 'vue-treeselect--multi-value',
    inject: [ 'instance' ],
    components: { Placeholder, TransitionGroup, Input, MultiValueItem },
    computed: {
      multiValueItems() {
        return this.instance.internalValue.value
            .slice(0, this.instance.limit)
            .map(this.instance.getNode)
      },
      count() {
        return this.instance.internalValue.length - this.instance.limit
      },
      isFocused() {
        return this.instance.trigger.isFocused;
      },
      hasValue() {
        return this.instance.hasValue.value;
      }
    },
  }
</script>
