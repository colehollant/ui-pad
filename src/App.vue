<template>
  <div id="app" class="min-h-screen bg-white text-gray-900">
    <router-view/>
  </div>
</template>

<style lang='postcss'>
#root {
  @apply bg-gray-200
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hljs-tag {
  @apply text-blue-500;
}
.hljs-attr {
  @apply text-green-300
}
.hljs-name {
  @apply text-blue-300
}
.hljs-string {
  @apply text-pink-400
}
</style>
