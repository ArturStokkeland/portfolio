<template>
  <div
    @click="goToProject"
    ref="card"
    class="bg-[rgba(255,255,255,0.1)] p-4 w-full rounded shadow-hard hover:cursor-pointer border-t border-t-[rgba(255,255,255,0.5)] border-l border-l-[rgba(255,255,255,0.5)] backdrop-blur"
  >
    <img
      :src="'/images/' + url + '/' + thumbnail + '.png'"
      alt="project thumbnail"
      draggable="false"
      class="select-none aspect-video"
    />
    <div class="flex flex-col gap-4 mt-4">
      <h2 class="text-2xl text-center select-none">{{ title }}</h2>
      <p class="select-none">{{ short }}</p>
      <div class="flex gap-2 flex-wrap">
        <div v-for="tag in tags" class="bg-neutral-900 rounded py-1 px-2">
          <p class="select-none">{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
declare var require: any;
import { ref } from "vue";
import { onMounted } from "vue";
import VanillaTilt from "vanilla-tilt";
import router from "@/router";

let card = ref("");

onMounted(() => {
  VanillaTilt.init(card.value, {
    reverse: true,
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.25,
  });
});

const props = defineProps({
  title: String,
  url: String,
  thumbnail: String,
  short: String,
  tags: Array,
});

function goToProject() {
  router.push("/portfolio/" + props.url);
}
</script>

<style scoped>
.shadow-hard {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}
</style>
