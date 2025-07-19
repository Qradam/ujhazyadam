<template>
  <LayoutScrollSmooth>
    <section id="service" class="container bg-white">
    <!-- Content -->
    <!-- Removed badge -->
    <h2 class="section-title text-black">{{ SERVICE.headline }}</h2>
    <p class="paragraph mt-4 text-black/70">{{ SERVICE.subline }}</p>

    <!-- Services List -->
    <div class="grid md:grid-cols-3 gap-6 mt-16">
      <div class="card bg-gray-50 border-gray-200" v-for="item in SERVICE.services" :key="item.name">
        <div class="flex items-center gap-4 mb-4">
          <VsxIcon :iconName="item.icon" class="text-black" :size="32" />
          <h3 class="text-lg font-bold text-black">{{ item.name }}</h3>
        </div>
        <p class="text-black/70">{{ item.description }}</p>
      </div>
    </div>
  </section>
  </LayoutScrollSmooth>
</template>

<style scoped>
.service-root, .service-root * {
  caret-color: transparent !important;
  -webkit-user-modify: none !important;
}
</style>
