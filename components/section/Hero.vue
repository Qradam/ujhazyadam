<script setup lang="ts">
import { HERO } from '~/utils/content'
import { projects } from '~/utils/projects'
</script>

<template>
  <div>
    <!-- Hero Section with Background GIF and Text -->
    <div id="hero" class="container relative py-0 overflow-hidden bg-white hero-root flex flex-col items-center min-h-[600px]">
      <!-- GIF Background with Gradient Overlay -->
            <!-- Content (Text) BELOW the photo -->
            <div class="z-10 flex flex-col items-center w-full mt-24 md:pl-4">
        <h1 class="text-left section-title !text-6xl mb-4 mt-12 text-center">
          {{ HERO.headline }}
        </h1>
        <p class="text-left text-lg md:text-xl font-thin mb-6">Web Developer & Graphic Designer</p>
        <div class="flex gap-4 items-center">
          <Button label="View Work" to="#work" />
          <Button label="Contact Me" to="#cta" variant="btn-dark" />
        </div>
      </div>
      <div class="relative w-full flex justify-center mt-12">
        <img src="/images/header.gif" alt="Hero Background" class="w-full h-[500px] object-cover rounded-2xl border-gray-200 border-2 shadow" />
      </div>

    </div>
    <!-- Works Carousel BELOW Hero Section, more spacing -->
    <div class="w-full inline-flex flex-nowrap relative overflow-hidden mt-12 z-10">
      <div class="h-full w-24 bg-gradient-to-r from-white to-transparent left-0 inset-y-0 absolute z-10"></div>
      <div class="h-full w-24 bg-gradient-to-l from-white to-transparent right-0 inset-y-0 absolute z-10"></div>
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll hover:animate-pause">
        <li v-for="item in projects" :key="item.slug" class="overflow-hidden group ">
          <NuxtLink :to="`/work/${item.slug}`">
            <img class="h-[180px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all border-2 border-gray-200 rounded-xl" :src="`/images/work/${item.mainImage}`" :alt="item.title" />
          </NuxtLink>
        </li>
        <!-- Duplicate for infinite scroll effect -->
        <li v-for="item in projects" :key="'dup-' + item.slug" class="overflow-hidden group" aria-hidden="true">
          <NuxtLink :to="`/work/${item.slug}`">
            <img class="h-[180px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all" :src="`/images/work/${item.mainImage}`" :alt="item.title" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.hero-root, .hero-root * {
  caret-color: transparent !important;
  -webkit-user-modify: none !important;
}
.hero-root {
  position: relative;
  min-height: 600px;
  border-radius: 1rem;
}
</style>

