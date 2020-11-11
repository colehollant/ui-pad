<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <input 
    type="range" 
    class="slider block my-2 h-2 w-full appearance-none bg-white border border-gray-400 rounded outline-none hover:bg-gray-100 hover:border-gray-500 transition ease-in duration-100"
    :name="$attrs.name || $attrs.id" 
    :id="$attrs.id || $attrs.name" 
    :min="$attrs.min" 
    :max="$attrs.max" 
    :step="$attrs.step" 
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</label>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    value: {
      type: null,
      required: true
    },
  },
}
</script>

<style lang="postcss" scoped>
.thumb {
  @apply block w-3 h-3 bg-teal-700 rounded-full cursor-pointer appearance-none;
}
.slider::-webkit-slider-thumb {
  @apply thumb;
}
.slider::-moz-range-thumb {
  @apply thumb;
}
.slider::-webkit-slider-thumb:hover {
  @apply bg-teal-800;
}
.slider::-moz-range-thumb:hover {
  @apply bg-teal-800;
}
.slider:focus::-webkit-slider-thumb {
  @apply shadow-outline;
}
.slider:focus::-moz-range-thumb {
  @apply shadow-outline;
}
</style>