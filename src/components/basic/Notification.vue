<template>
<transition
  appear
  enter-active-class="transition-all transform duration-300 ease-out"
  leave-active-class="transition-all transform duration-200 ease-in"
  enter-class="opacity-50 scale-90 translate-x-1/2"
  enter-to-class="opacity-100 scale-100 translate-x-0"
  leave-class="opacity-100 scale-100 translate-x-0"
  leave-to-class="opacity-0 scale-50 translate-x-1/2"
>
  <div class="fixed top-0 right-0 m-4 p-2 max-w-md rounded-lg z-modal" style="box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">
    <slot />
  </div>
</transition>
</template>

<script>
export default {
  name: 'Notification'
}
</script>