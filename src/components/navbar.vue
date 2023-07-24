<template>
  <div class="w-full h-16 bg-neutral-900 fixed top-0 z-50">
    <div
      class="w-8/12 h-full m-auto justify-between gap-16 items-center hidden lg:flex"
    >
      <!-- <router-link to="/" class="navlink">Home</router-link>
      <router-link to="/portfolio" class="navlink">Portfolio</router-link>
      <router-link to="/about" class="navlink">About</router-link>
      <router-link to="/contact" class="navlink">Contact</router-link>
      <a target="_blank" rel="noopener" href="/cv_artur.pdf" class="navlink"
        >CV</a
      > -->
      <router-link to="/" class="navlink">
        <cool-button :text="'Home'" :colortheme="'neutral'" />
      </router-link>
      <router-link to="/portfolio" class="navlink">
        <cool-button :text="'Portfolio'" :colortheme="'neutral'" />
      </router-link>
      <!-- <router-link to="/about" class="navlink">
        <cool-button :text="'About'" :colortheme="'neutral'" />
      </router-link> -->
      <router-link to="/contact" class="navlink">
        <cool-button :text="'Contact'" :colortheme="'neutral'" />
      </router-link>
      <a target="_blank" rel="noopener" href="/cv_artur.pdf" class="navlink">
        <cool-button :text="'CV'" :colortheme="'blue'" />
      </a>
    </div>
    <div class="h-full flex justify-end items-center lg:hidden">
      <div
        class="hamburger p-4 m-2 rounded-full flex flex-col gap-[5px] hover:cursor-pointer hover:shadow-lg hover:bg-neutral-600"
        :class="{ open: isMenuOpen }"
        @click="toggleMenu"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </div>
    </div>
  </div>
  <div
    class="smolmenu mt-16 fixed top-0 right-0 bg-neutral-900 flex flex-col items-center gap-4 overflow-hidden transition-width z-50 lg:hidden"
    :class="isMenuOpen ? 'w-full' : 'w-0'"
  >
    <!-- <router-link @click="closeMenu" to="/" class="navlinksmol"
      >Home</router-link
    >
    <router-link @click="closeMenu" to="/portfolio" class="navlinksmol"
      >Portfolio</router-link
    >
    <router-link @click="closeMenu" to="/about" class="navlinksmol"
      >About</router-link
    >
    <router-link @click="closeMenu" to="/contact" class="navlinksmol"
      >Contact</router-link
    >
    <a
      @click="closeMenu"
      target="_blank"
      rel="noopener"
      href="/cv_artur.pdf"
      class="navlinksmol"
      >CV</a
    > -->
    <router-link @click="closeMenu" to="/" class="navlinksmol"
      ><cool-button :text="'Home'" :colortheme="'neutral'"
    /></router-link>
    <router-link @click="closeMenu" to="/portfolio" class="navlinksmol"
      ><cool-button :text="'Portfolio'" :colortheme="'neutral'"
    /></router-link>
    <!-- <router-link @click="closeMenu" to="/about" class="navlinksmol"
      ><cool-button :text="'About'" :colortheme="'neutral'"
    /></router-link> -->
    <router-link @click="closeMenu" to="/contact" class="navlinksmol"
      ><cool-button :text="'Contact'" :colortheme="'neutral'"
    /></router-link>
    <a
      @click="closeMenu"
      target="_blank"
      rel="noopener"
      href="/cv_artur.pdf"
      class="navlinksmol"
      ><cool-button :text="'CV'" :colortheme="'blue'"
    /></a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
/* .navlink {
  @apply hover:bg-neutral-600 rounded-md px-4 py-2 text-sm w-24 text-center;
} */

.navlink {
  @apply font-bold w-52 h-9 text-center;
}

/* .navlinksmol {
  @apply w-10/12 border-4 border-neutral-900 text-center p-4 hover:bg-neutral-600;
} */

.navlinksmol {
  @apply w-10/12 h-14;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  @apply bg-neutral-200 block h-[2px] w-[20px] transition-all duration-300 ease-in-out;
}

.open .hamburger-top {
  transform: rotate(45deg) translate(5px, 5px);
}

.open .hamburger-middle {
  @apply opacity-0;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translate(5px, -5px);
}

.smolmenu {
  height: calc(100vh - 4rem);
}
</style>
