<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '~/utils/projects'

const route = useRoute()
const slug = route.params.slug as string
const project = projects.find(p => p.slug === slug)
</script>

<template>
  <div class="container py-20 bg-white">
    <div v-if="project">
      <h1 class="text-4xl font-bold text-black mb-4">{{ project.title }}</h1>
      <p class="text-black/70 mb-8">{{ project.subtext }}</p>
      
      <!-- Visit Site Button for Web Projects -->
      <div v-if="project.link" class="mb-8">
        <a 
          :href="project.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <span>Visit Site</span>
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
      
      <img :src="`/images/work/${project.mainImage}`" :alt="project.title" class="w-full mb-8" />
      <div v-if="project.additionalImages.length" class="grid grid-cols-1 md:max-w-3xl mx-auto gap-4 mt-8">
        <img v-for="img in project.additionalImages" :key="img" :src="`/images/work/${img}`" class="rounded-lg w-full" />
      </div>
    </div>
    <div v-else class="text-center text-gray-400 py-32">
      <h2 class="text-2xl font-bold mb-4">Project not found</h2>
      <p>The project you are looking for does not exist.</p>
    </div>
  </div>
</template> 