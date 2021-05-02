<template>
  <div>
    <slot></slot>
    <teleport to="body">
      <div>Hello World</div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>
