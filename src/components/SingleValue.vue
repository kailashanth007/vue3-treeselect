<template>
    <template v-if="hasValue">
      <div class="vue-treeselect__value-container">
        <div class="vue-treeselect__single-value s-value-container">
          <slot v-if="$slots['value-label']" name="value-label"
                :node="node" />
          <template v-else>{{ node.label }}</template>
        </div>
      </div>
    </template>
    <Placeholder class="s-value-container" v-if="!hasValue && !isFocused"/>
    <Input ref="input" :class="{ 'as-overlay': hasValue }" />
</template>

<script>
  import Input from '@/components/Input.vue'
  import Placeholder from '@/components/Placeholder.vue'

  export default {
    name: 'vue-treeselect--single-value',
    inject: [ 'instance' ],
    components: { Placeholder, Input },
    computed: {
      node() {
        return this.instance.selectedNodes.value[0];
      },
      hasValue() {
        return  this.instance.hasValue.value;
      },
      hasActiveQuery() {
        return this.instance.trigger.searchQuery;
      },
      isFocused() {
        return this.instance.trigger.isFocused;
      },
    }
  }
</script>
