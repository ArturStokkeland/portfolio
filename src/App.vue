<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav-bar />
  <div class="pt-16 mt-4 mx-8 lg:mx-auto lg:w-8/12">
    <RouterView />
  </div>
</template>
