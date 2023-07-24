<template>
  <div class="h-[calc(100vh-4rem)] -mt-4 flex flex-col justify-center gap-8">
    <div>
      <h2 class="text-2xl mb-2">View my socials:</h2>
      <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/artur-st/"
          class="navlink"
        >
          <cool-button :text="'LinkedIn'" :colortheme="'blue'" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/ArturStokkeland"
          class="navlink"
        >
          <cool-button :text="'GitHub'" :colortheme="'blue'" />
        </a>
        <a target="_blank" rel="noopener" href="/cv_artur.pdf" class="navlink">
          <cool-button :text="'CV'" :colortheme="'blue'" />
        </a>
      </div>
    </div>
    <div>
      <h2 class="text-2xl mb-2">Contact me:</h2>
      <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div
          class="flex items-center gap-4 border h-12 rounded-lg overflow-hidden lg:flex-1"
        >
          <div class="flex items-center justify-center w-12 h-full bg-cyan-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-at h-9/12 w-9/12"
            >
              <path
                class="fill-neutral-300"
                d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </div>
          <p class="text-xl">
            <a
              href="mailto:arturst95@gmail.com"
              class="border-b-2 border-cyan-600"
              >arturstokkeland@gmail.com</a
            >
          </p>
        </div>
        <div
          class="flex items-center gap-4 border h-12 rounded-lg overflow-hidden lg:flex-1"
        >
          <div class="flex items-center justify-center w-12 h-full bg-cyan-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-phone-ring h-9/12 w-9/12"
            >
              <path
                class="fill-neutral-300"
                d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
              />
              <path
                class="fill-neutral-300"
                d="M22 10a1 1 0 0 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1 0-2 8 8 0 0 1 8 8zm-4 0a1 1 0 0 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4z"
              />
            </svg>
          </div>
          <p class="text-xl">+44 (0)7479492661</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navlink {
  @apply font-bold w-full h-12 text-center block lg:flex-1;
}
</style>
