<script setup lang="ts">
import { ABOUT } from '~/utils/content'
</script>

<template>
 <LayoutScrollSmooth>
  <section id="about" class="container bg-white about-root">
    <div>
      <h2 class="section-title text-black mb-4">{{ ABOUT.label }}</h2>
      <div class="space-y-4 mb-16">
        <p class="paragraph max-w-xl text-black/70" v-for="(text, index) in ABOUT.introduce" :key="index">
          {{ text }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Design Programs Column -->
        <div class="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-lg mr-4"></div>
            <h3 class="text-lg font-bold text-black">Design</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span class="text-black">Photoshop</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span class="text-black">Illustrator</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span class="text-black">Adobe Dimensions</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <span class="text-black">Figma</span>
            </div>
          </div>
        </div>

        <!-- Development Programs Column -->
        <div class="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-green-500 rounded-lg mr-4"></div>
            <h3 class="text-lg font-bold text-black">Development</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span class="text-black">Nuxt</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span class="text-black">PHP</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span class="text-black">JavaScript</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
              <span class="text-black">Tailwind CSS</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
              <span class="text-black">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <Button label="Connect Me" to="#cta" variant="btn-dark" />
      </div>
    </div>
  </section>
 </LayoutScrollSmooth>
</template>

<style scoped>
.about-root, .about-root * {
  caret-color: transparent !important;
  -webkit-user-modify: none !important;
}
</style>
