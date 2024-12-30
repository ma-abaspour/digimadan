
<template>


  <Navigation/>

  <section class="relative bg-white dark:bg-zinc-950 dark:text-white py-20 px-6 lg:py-32 lg:px-8 min-h-screen">

  </section>

  <Footer/>


  <!-- <div>
    <div class="px-6 lg:px-8">
      <div class="mx-auto md:max-w-7xl">
        <main class="min-w-0 max-w-full flex-1">
          <div class="relative mx-auto mt-20 max-w-md pb-16 text-center">
            <h1 class="text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]">
              Showcase
            </h1>
            <p class="mb-4 mt-6 text-3xl text-zinc-950 dark:text-zinc-50">
              Building something great with motion-primitives?
            </p>
            <p class="text-base text-zinc-600 dark:text-zinc-200">
              I’d love to feature it! Send me a DM on
              <a
                href="https://x.com/ibelick"
                target="_blank"
                class="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                X
              </a>
              or email me at
              <a
                href="mailto:julien.thibeaut@gmail.com"
                class="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                julien.thibeaut@gmail.com
              </a>
            </p>
          </div>

          <div
            class="mx-auto grid max-w-5xl grid-cols-1 gap-6 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="i in 6"
              :key="i"
              class="h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900"
            ></div>
          </div>
        </main>
      </div>
    </div>
  </div> -->


</template>

<script setup>
// No external components required for this simplified version.
</script>


<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}
</style>


<style scoped>
.bg-particles {
  position: relative;
  overflow: hidden;
  background-color: #1a1a1a; /* Dark background for contrast */
}

.bg-particles::before,
.bg-particles::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
  opacity: 0.5;
  animation: particle-motion 20s linear infinite;
  pointer-events: none;
}

.bg-particles::after {
  animation-delay: 10s; /* Adds variation */
}

@keyframes particle-motion {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  25% {
    transform: translate(10%, -10%) scale(0.8);
  }
  50% {
    transform: translate(50%, 50%) scale(1.2);
  }
  75% {
    transform: translate(-30%, 30%) scale(0.9);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5);
  }
}
</style>