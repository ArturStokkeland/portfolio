<template>
  <!-- <router-link to="/portfolio" class="absolute left-4"> Back </router-link> -->
  <!-- <router-link to="/portfolio" class="hidden lg:block">
    <div
      class="flex justify-center items-center h-[calc(100%-4rem)] w-40 fixed left-0 top-16 bg-gradient-to-l from-[rgba(0,0,0,0.0)] to-neutral-900 hover:cursor-pointer hover:to-neutral-950"
    >
      <p class="text-neutral-200 text-4xl font-bold">&lt;</p>
    </div>
  </router-link> -->
  <router-link
    to="/portfolio"
    class="group hidden lg:flex justify-center items-center h-[calc(100%-4rem)] w-40 fixed left-0 top-16 bg-gradient-to-l from-[rgba(0,0,0,0.0)] to-neutral-900 hover:cursor-pointer hover:w-48 transition-all duration-500"
  >
    <p class="text-neutral-200 text-4xl font-bold text-shadow">&lt;</p>
  </router-link>
  <div class="absolute z-50 top-0 left-8 h-16 flex items-center">
    <router-link
      to="/portfolio"
      class="font-bold w-48 h-10 inline-block lg:hidden"
      ><cool-button :text="'Back to portfolio'" :colortheme="'blue'"
    /></router-link>
  </div>

  <div ref="modal" class="top-0 left-0 z-50 w-full h-full fixed hidden">
    <div
      class="w-full h-full bg-[rgba(0,0,0,0.5)] hover:cursor-pointer"
      @click="closeModal"
    ></div>
    <div
      class="absolute top-0 right-0 m-2 p-4 rounded-full flex flex-col gap-[12px] bg-neutral-800 hover:cursor-pointer hover:bg-neutral-600 hover:shadow-lg"
      @click="closeModal"
    >
      <span class="close-left bg-neutral-200 block h-[2px] w-[20px]"></span>
      <span class="close-right bg-neutral-200 block h-[2px] w-[20px]"></span>
    </div>
    <img ref="modalImg" src="" alt="modal image" class="modalImage" />
  </div>
  <div class="flex flex-col gap-4 mb-4">
    <h1 class="font-bold text-4xl">
      {{ currentProject?.title }}
    </h1>
    <div class="flex gap-2">
      <div
        v-for="tag in currentProject?.tags"
        class="flex bg-neutral-900 rounded py-1 px-2"
      >
        <p class="inline text-neutral-200">{{ tag }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 2xl:grid-cols-2">
      <div class="flex flex-col gap-4">
        <div
          class="w-full relative aspect-video rounded-lg bg-neutral-900 overflow-hidden"
        >
          <div
            class="w-full h-full flex transition-all duration-300"
            ref="carouselContent"
          >
            <img
              v-for="video in currentProject?.videos"
              class="min-w-full min-h-full object-contain"
              src="/images/test.png"
              alt="video"
            /><img
              v-for="image in currentProject?.images"
              class="min-w-full min-h-full object-contain hover:cursor-pointer"
              :src="'/images/' + image + '.png'"
              alt="image"
              @click="openModal('/images/' + image + '.png')"
            />
          </div>
          <div
            class="absolute flex items-center justify-center left-0 top-0 w-1/4 h-full bg-gradient-to-l from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.8)] z-40 opacity-0 hover:cursor-pointer hover:opacity-100 transition-all duration-300"
            @click="changeSlide(currentSlide - 1)"
          >
            <p
              class="text-4xl text-neutral-200 font-bold select-none text-shadow"
            >
              &lt;
            </p>
          </div>
          <div
            class="absolute flex items-center justify-center right-0 top-0 w-1/4 h-full bg-gradient-to-r from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.8)] z-40 opacity-0 hover:cursor-pointer hover:opacity-100 transition-all duration-300"
            @click="changeSlide(currentSlide + 1)"
          >
            <p
              class="text-4xl text-neutral-200 font-bold select-none text-shadow"
            >
              &gt;
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-4 items-center" ref="carousel">
          <div
            v-for="(num, index) in currentProject?.videos?.concat(
              currentProject?.images
            )"
            class="rounded-full w-3 h-3 bg-neutral-900 hover:cursor-pointer hover:scale-150 hover:bg-cyan-600 transition-all duration-500"
            :class="{ active: index == 0 }"
            @click="changeSlide(index)"
          ></div>
        </div>
      </div>

      <div>
        <h2
          class="text-3xl font-bold pb-4 mb-4 border-b-[1px] border-neutral-500"
        >
          About this project
        </h2>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          eligendi, animi sunt aperiam corporis rerum eum ullam sapiente non
          aliquam fugit quae labore, facere repellat, ut dignissimos odio eaque
          iure velit dolorum necessitatibus autem quia. Fuga est quas cum fugit
          similique quae incidunt nemo, sunt quia perferendis veniam alias neque
          officiis optio obcaecati dolores vitae ab blanditiis porro sed error
          saepe deleniti molestias. Odio aspernatur error voluptatem, doloremque
          quam sed a placeat aperiam, minus, excepturi sit quo voluptas ratione
          vitae reiciendis eum? Quidem earum officia ducimus! Laboriosam ea at
          error unde, iste culpa tenetur, alias dolorum, molestiae omnis eius
          odio!
        </p>
      </div>
    </div>

    <div>
      <h2
        class="text-3xl font-bold pb-4 mb-4 border-b-[1px] border-neutral-500"
      >
        Things to note
      </h2>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi,
        animi sunt aperiam corporis rerum eum ullam sapiente non aliquam fugit
        quae labore, facere repellat, ut dignissimos odio eaque iure velit
        dolorum necessitatibus autem quia. Fuga est quas cum fugit similique
        quae incidunt nemo, sunt quia perferendis veniam alias neque officiis
        optio obcaecati dolores vitae ab blanditiis porro sed error saepe
        deleniti molestias. Odio aspernatur error voluptatem, doloremque quam
        sed a placeat aperiam, minus, excepturi sit quo voluptas ratione vitae
        reiciendis eum? Quidem earum officia ducimus! Laboriosam ea at error
        unde, iste culpa tenetur, alias dolorum, molestiae omnis eius odio!
      </p>
    </div>

    <div>
      <h2
        class="text-3xl font-bold pb-4 mb-4 border-b-[1px] border-neutral-500"
      >
        Details
      </h2>
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-lg">Date worked on:</p>
          <p class="text-lg">{{ currentProject?.date }}</p>
        </div>
        <div>
          <p class="text-lg">Tags:</p>
          <div class="flex gap-2">
            <div
              v-for="tag in currentProject?.tags"
              class="flex bg-neutral-900 rounded py-1 px-2"
            >
              <p class="inline text-neutral-200">{{ tag }}</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-lg">Links:</p>
          <div class="flex gap-4">
            <a
              target="_blank"
              rel="noopener"
              href="/cv_artur.pdf"
              class="w-40 h-10 inline-block"
              ><cool-button :text="'View Live'" :colortheme="'blue'"
            /></a>
            <a
              target="_blank"
              rel="noopener"
              href="/cv_artur.pdf"
              class="w-40 h-10 inline-block"
              ><cool-button :text="'View on Github'" :colortheme="'blue'"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import projects from "@/assets/projects.ts";

const route = useRoute();
console.log(route.matched);
let currentRoute = route.params.url;
let currentProject = projects.find((project) => project.url == currentRoute);

let modal = ref("");
let modalImg = ref("");

function openModal(img) {
  console.log(modalImg.value);
  modalImg.value.src = img;
  modal.value.classList.remove("hidden");
}

function closeModal() {
  modal.value.classList.add("hidden");
}

let currentSlide = 0;
let carousel = ref("");
let carouselContent = ref("");

function changeSlide(nextSlide) {
  if (
    nextSlide == currentSlide ||
    nextSlide < 0 ||
    nextSlide >= carousel.value.children.length
  ) {
    return;
  }

  carousel.value.children[currentSlide].classList.remove("active");
  carousel.value.children[nextSlide].classList.add("active");
  let percentToTransform = -100 * nextSlide;
  carouselContent.value.style.transform = `translateX(${percentToTransform}%)`;
  currentSlide = nextSlide;
}
</script>

<style scoped>
.close-left {
  transform: rotate(45deg) translate(5px, 5px);
}

.close-right {
  transform: rotate(-45deg) translate(5px, -5px);
}

.modalImage {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg;
  max-width: 90%;
  max-height: 90%;
}

.text-shadow {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.dataGrid > p {
  @apply inline;
}

.active {
  @apply scale-150 bg-cyan-600;
}
</style>