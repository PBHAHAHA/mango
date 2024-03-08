<template>
  <div :class="`${theme} h-full`">
    <Header></Header>
    <div class="bg-bg2 h-full">
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import {useStorage} from "@vueuse/core"
const theme = useStorage('theme')
</script>