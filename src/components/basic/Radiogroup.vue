<template>
<div>
  <slot name="label" />
  <div 
    class="grid grid-flow-col justify-start items-center gap-2" 
    v-for="(val, index) in options" 
    :key="['radio-option', index].join('-')"
  >
    <label
      class="relative w-5 h-5 border border-gray-300 rounded-full text-white transition duration-100 ease-in focus:outline-none focus:shadow-outline" 
      tabindex="0"
      @keydown.space="$event.target.click()"
      @keydown.enter="$event.target.click()"
      :class="{'bg-white': val.value !== value, 'bg-teal-500': val.value === value}"
    >
      <input
        type="radio"
        :name="[$attrs.name || $attrs.id, index].join('-')"
        :id="[$attrs.id || $attrs.name, index].join('-')"
        :value="val.value"
        :key="['radio-option', index, val.value === value].join('-')"
        class="w-0 h-0 absolute invisible pointer-events-none"
        @input="$emit('input', $event.target.value)"
      >
    </label>
    <label :for="[$attrs.id || $attrs.name, index].join('-')">
      {{ val.label }}
    </label>
  </div>
</div>
</template>

<script>
export default {
  name: 'Radiogroup',
  props: {
    value: {
      type: null,
      required: false
    },
    options: {
      type: Array,
      default: () => ([{label: 'label', value: 'value'}])
    },
  },
}
</script>