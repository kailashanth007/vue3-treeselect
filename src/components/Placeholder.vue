<template>
  <div :class="{'vue-treeselect__placeholder': true,
  'vue-treeselect-helper-zoom-effect-off': true,
  'vue-treeselect-helper-hide': hasValue || hasSearchQuery }" >
    {{ instance.placeholder }}
  </div>
</template>

<script>
  export default {
    name: 'vue-treeselect--placeholder',
    inject: [ 'instance' ],
    computed: {
      hasValue() {
        return this.instance.hasValue.value
      },
      hasSearchQuery() {
        return !!this.instance.trigger.searchQuery
      }
    },
  }
</script>
