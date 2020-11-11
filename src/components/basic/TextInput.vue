<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <textarea
    v-if="multiline"
    :name="$attrs.name || $attrs.id"
    :id="$attrs.id || $attrs.name" 
    :placeholder="$attrs.placeholder"
    class="block w-full px-2 py-1 font-medium rounded border border-gray-300 focus:outline-none focus:shadow-outline resize-y"
    :class="{'border-orange-700': error !== ''}"
    @input="$emit('input', $event.target.value)"
    :value="value"
  />
  <input
    :type="$attrs.type || 'text'"
    v-else
    :name="$attrs.name || $attrs.id"
    :id="$attrs.id || $attrs.name" 
    :placeholder="$attrs.placeholder"
    class="block w-full px-2 py-1 font-medium rounded border border-gray-300 focus:outline-none focus:shadow-outline"
    :class="{'border-orange-700': error !== ''}"
    @input="$emit('input', $event.target.value)"
    :value="value"
  />
  <p v-if="error" class="mt-1 text-sm font-medium text-orange-700">
    {{ error }}
  </p>
</label>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    multiline: {
      type: Boolean,
      default: false
    },
    value: {
      type: null,
      required: true
    },
    error: {
      type: String,
      default: '',
    },
  }
}
</script>