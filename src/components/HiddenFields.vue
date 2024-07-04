<template>
  <template v-if="canRender">
    <input v-for="(i, $i) in values"
        type="hidden"
           :name="instance.name"
           :value="i"
           :key="'hidden-field-' + $i"
    />
  </template>
</template>

<script>
  import { isNaN } from '../utils'
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'vue-treeselect--hidden-fields',
    inject: [ 'instance' ],
    computed: {
      canRender() {
        return !this.instance || !this.instance.name || this.instance.disabled || !this.instance.hasValue
      },
      values() {
        let stringifiedValues = this.instance.internalValue.value.map(this.stringifyValue);
        if (this.instance.multiple && this.instance.joinValues) stringifiedValues = [
          stringifiedValues.join(this.instance.delimiter),
        ]

        return stringifiedValues;
      }
    },
    methods: {
      stringifyValue(value) {
        if (typeof value === 'string') return value
        // istanbul ignore else
        if (value != null && !isNaN(value)) return JSON.stringify(value)
        // istanbul ignore next
        return ''
      }
    }
  })
</script>
