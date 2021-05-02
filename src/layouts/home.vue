<template>
  <Wrapper>
    <div>Home Page</div>
    <button>
      <router-link to="/about/">about</router-link>
    </button>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wrapper from '../components/wrapper.vue'

export default defineComponent({
  components: { Wrapper },

  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>
