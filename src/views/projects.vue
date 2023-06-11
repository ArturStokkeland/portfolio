<template>
  <div class="flex flex-col gap-4 mb-4">
    <h1 class="text-3xl text-center">Portfolio</h1>
    <!-- <cool-button /> -->
    <div class="flex flex-wrap justify-center gap-2">
      <p
        v-for="tag in tags"
        class="bg-neutral-900 p-2 rounded text-center hover:cursor-pointer hover:brightness-125"
        :class="{ 'brightness-125': currentFilter === tag }"
        @click="filterProjects(tag)"
      >
        {{ tag }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-12 2xl:grid-cols-3"
    >
      <project-card
        v-for="project in filteredProjects"
        :title="project.title"
        :url="project.url"
        :thumbnail="project.thumbnail"
        :short="project.short"
        :tags="project.tags"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import tags from "@/assets/tags.ts";
import projects from "@/assets/projects.ts";

let filteredProjects = ref(projects);

let currentFilter = ref("");

function filterProjects(tag) {
  if (currentFilter.value === tag) {
    filteredProjects.value = projects;
    currentFilter.value = "";
    return;
  }

  currentFilter.value = tag;

  filteredProjects.value = projects.filter((project) => {
    return project.tags.includes(tag);
  });
}

console.log(filteredProjects);
console.log("asdf");
console.log(tags);
</script>
