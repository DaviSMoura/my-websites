<script setup>
import MeCard from '../components/MeCard.vue'
</script>

<template lang="pug">
.grid.grid-cols-12.gap-10
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    me-card
</template>

<style scoped>
#app {
  padding-top: 60px
}
</style>