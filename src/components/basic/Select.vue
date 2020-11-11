<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <select 
    :id="$attrs.id || $attrs.name" 
    :name="$attrs.name"
    :value="value"
    class="w-full pl-2 pr-8 py-1 appearance-none border border-gray-300 rounded focus:outline-none focus:shadow-outline"
    @change="$emit('input', $event.target.value)"
  >
    <!-- @input="update"  -->
    <!-- @change="update"  -->
    <option v-if="$attrs.placeholder" value="" disabled selected>{{ $attrs.placeholder }}</option>
    <option 
      :value="option.value"
      v-for="(option, i) in options"
      :key="i"
    >
      {{ option.label }}
    </option>
  </select>
</label>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => ([{label: 'label', value: 'value'}])
    }
  },
  setup(_, {emit}) {
    function update(e) {
      emit('input', e.target.value)
    }
    return { update }
  }
}
</script>

<style scoped>
select {
  background-size: 1.25rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23718096' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 0.125rem);
  background-position-y: 50%;
}
</style>