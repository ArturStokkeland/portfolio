<template>
  <div
    ref="buttonRoot"
    @mousemove="getPos"
    @mouseleave="mouseAlignment = 'none'"
    class="group h-full w-full relative rounded-md hover:cursor-pointer"
    :class="{
      alignleft: mouseAlignment === 'left',
      alignmiddle: mouseAlignment === 'center',
      alignright: mouseAlignment === 'right',
    }"
  >
    <div
      class="absolute bottom-0 h-2/3 w-full rounded-md"
      :class="{
        'bg-emerald-800': getColourTheme.emerald,
        'bg-red-800': getColourTheme.red,
        'bg-blue-800': getColourTheme.blue,
        'bg-yellow-800': getColourTheme.yellow,
        'bg-stone-700': getColourTheme.stone,
        'bg-neutral-950': getColourTheme.neutral,
        'bg-cyan-900': getColourTheme.blue,
      }"
    ></div>
    <div
      class="mybutton flex items-center justify-center absolute bottom-[12.5%] h-[87.5%] w-full rounded-md shadow-hard group-hover:bottom-[5%] transition-all duration-150 group-hover:brightness-125"
      :class="{
        'bg-emerald-600': getColourTheme.emerald,
        'bg-red-600': getColourTheme.red,
        'bg-blue-600': getColourTheme.blue,
        'bg-yellow-600': getColourTheme.yellow,
        'bg-stone-600': getColourTheme.stone,
        'bg-neutral-800': getColourTheme.neutral,
        'bg-cyan-700': getColourTheme.blue,
      }"
    >
      <p class="select-none">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

let mouseAlignment = ref("none");
let buttonRoot = ref("");

const props = defineProps({
  text: String,
  colortheme: String,
});

const getColourTheme = computed(() => {
  return {
    emerald: props.colortheme === "emerald",
    red: props.colortheme === "red",
    blue: props.colortheme === "blue",
    yellow: props.colortheme === "yellow",
    stone: props.colortheme === "stone",
    neutral: props.colortheme === "neutral",
    blue: props.colortheme === "blue",
  };
});

function getPos(event) {
  let rootCoords = buttonRoot.value.getBoundingClientRect();
  let hitx = event.clientX - rootCoords.left;
  if (hitx < rootCoords.width / 3) {
    mouseAlignment.value = "left";
  } else if (hitx > (rootCoords.width / 3) * 2) {
    mouseAlignment.value = "right";
  } else {
    mouseAlignment.value = "center";
  }
}
</script>

<style scoped>
.alignleft > .mybutton {
  transform: skewY(-1deg) translate3d(0px, -0.5px, 0px);
}
.alignright > .mybutton {
  transform: skewY(1deg) translate3d(0px, -0.5px, 0px);
}

.router-link-active > div > .mybutton {
  bottom: 5% !important;
  @apply brightness-125 bg-neutral-700;
}
.router-link-active > div > .mybutton > p {
  bottom: 5% !important;
  @apply text-neutral-200;
}
</style>
