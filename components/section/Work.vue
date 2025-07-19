<script setup lang="ts">
import { projects } from '~/utils/projects'
</script>

<template>
 <LayoutScrollSmooth>
  <section id="work" class="container bg-white work-root">
    <!-- Content -->
    <!-- Removed badge -->
    <h2 class="section-title text-black">{{ WORK.headline }}</h2>
    <p class="paragraph mt-4 max-w-xl text-black/70">{{ WORK.subline }}</p>
    <!-- Works List -->
    <div class="grid md:grid-cols-2 gap-6 mt-16">
      <div class="p-3 border bg-gray-50 backdrop-blur-sm border-gray-200 rounded-2xl relative flex items-center group" v-for="item in projects" :key="item.slug">
        <div class="overflow-hidden aspect-[4/3] rounded-lg ">
          <NuxtLink :to="`/work/${item.slug}`">
            <img class="group-hover:scale-105 transition-all duration-500 w-full h-full object-cover" :src="`/images/work/${item.mainImage}`" :alt="'Thumbnail ' + item.title ">
          </NuxtLink>
        </div>
        <div class="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-white text-black backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4">
          <div>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-black text-lg lg:text-xl tracking-wide font-bold ">{{ item.title }}</h3>
              </div>
              <NuxtLink :to="`/work/${item.slug}`">
                <VsxIcon class="text-gray-600" iconName="ExportSquare" :size="24"  type="linear" />
              </NuxtLink>
            </div>
            <div class="bg-gradient-to-r w-44 h-[1px] from-transparent via-gray-400 to-transparent my-2"></div>
            <p class="paragpraph text-gray-600">
              {{ item.subtext }}
            </p>
          </div>
        </div>
        <div class="absolute  bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-gray-100/0 via-gray-400 to-gray-100/0"></div>
      </div>
    </div>
  </section>
 </LayoutScrollSmooth>
</template>

<style scoped>
.work-root, .work-root * {
  caret-color: transparent !important;
  -webkit-user-modify: none !important;
}
</style>
