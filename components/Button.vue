<script setup lang="ts">
defineProps<{
  label: string;
  to: string;
  variant?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative overflow-hidden inline-flex"
    :class="variant ? 'btn-dark' : 'btn-primary'"
  >
    <div class="relative overflow-hidden w-full h-full flex items-center justify-center">
      <p class="group-hover:-translate-y-7 duration-500 text-inherit">{{ label }}</p>
      <p class="absolute top-7 left-0 group-hover:top-0 duration-500 text-inherit">{{ label }}</p>
    </div>
  </NuxtLink>
</template>
