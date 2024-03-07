<template>
  <div :class="`${theme}`">
    <Header></Header>
    <slot />
  </div>
</template>
<script setup>
import {useStorage} from "@vueuse/core"
const theme = useStorage('theme')
</script>