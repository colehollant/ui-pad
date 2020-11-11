<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <div class="flex">
    <slot name="label-left" />
    <div 
      class="relative w-5 h-5 border border-gray-300 rounded text-white transition duration-100 ease-in focus-within:shadow-outline" 
      :class="{'bg-white': !value, 'bg-teal-500': value}"
    >
      <input 
        type="checkbox" 
        :name="$attrs.name || $attrs.id"
        :id="$attrs.id || $attrs.name"
        :value="value" 
        @input="$emit('input', !value)"
        class="w-0 h-0 absolute pointer-events-none"
      >
      <svg v-if="value" class="absolute inset-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </div>
    <slot name="label-right" />
  </div>
</label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
}
</script>