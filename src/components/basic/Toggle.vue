<template>
  <label class="block" :for="$attrs.id || $attrs.name">
    <slot name="label" />
    <div class="rounded-full w-min focus-within:shadow-outline">
      <div
        class="relative rounded-full w-10 h-5 bg-gray-400 border border-gray-300 cursor-pointer transition duration-100 ease-in"
        :class="{'bg-teal-500': value}"
      >
        <div
          class="h-full w-1/2 absolute left-0 top-0 bg-gray-100 rounded-full transition duration-100 ease-in"
          :class="{'transform translate-x-full': value}"
        />
      </div>
      <input
        type="checkbox"
        :name="$attrs.name || $attrs.id"
        :id="$attrs.id || $attrs.name"
        :value="value"
        @input="$emit('input', !value)"
        class="w-0 h-0 absolute pointer-events-none"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: "Toggle",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
};
</script>