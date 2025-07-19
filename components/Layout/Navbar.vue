<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { NAVLINKS } from '~/utils/content'
const isActive = ref(false)
function navActive() {
  isActive.value = !isActive.value
}
function closeMenu() {
  isActive.value = false
}
// Click-away handler for desktop
let clickAwayHandler: ((e: MouseEvent) => void) | null = null
const isClient = typeof window !== 'undefined'
const isDesktop = ref(false)
function updateIsDesktop() {
  if (isClient) {
    isDesktop.value = window.innerWidth >= 1024
  } else {
    isDesktop.value = false
  }
}
onMounted(() => {
  updateIsDesktop()
  if (isClient) window.addEventListener('resize', updateIsDesktop)
  clickAwayHandler = (e: MouseEvent) => {
    if (isActive.value && isDesktop.value) {
      const sidebar = document.getElementById('nav-sidebar')
      if (sidebar && !sidebar.contains(e.target as Node)) {
        closeMenu()
      }
    }
  }
  document.addEventListener('mousedown', clickAwayHandler)
})
onBeforeUnmount(() => {
  if (isClient) window.removeEventListener('resize', updateIsDesktop)
  if (clickAwayHandler) document.removeEventListener('mousedown', clickAwayHandler)
})
</script>

<template>
  <header class="max-w-[1480px] px-4 mx-auto fixed inset-x-0 top-0 mt-4 lg:mt-10 z-50">
    <div class="flex items-center justify-between">
      <button @click="navActive" class="ml-auto btn-dark px-4 py-2 rounded-full group flex items-center relative" aria-label="Toggle menu">
        <span class="relative w-8 h-8 flex items-center justify-center">
          <transition name="icon-fade" mode="out-in">
            <svg v-if="!isActive" key="hamburger" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300">
              <path d="M5 6h14"/>
              <path d="M5 12h14"/>
              <path d="M5 18h14"/>
            </svg>
            <svg v-else key="close" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 rotate-90">
              <path d="M17 17L7 7"/>
              <path d="M17 7L7 17"/>
            </svg>
          </transition>
        </span>
      </button>
    </div>
    <transition name="fade">
      <div v-show="isActive">
        <div class="fixed inset-0 bg-black/60 z-50" @click.self="closeMenu">
          <div class="menu-panel">
            <button class="ml-auto mb-4" @click="closeMenu" aria-label="Close menu">
              <span class="relative w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 17L7 7"/>
                  <path d="M17 7L7 17"/>
                </svg>
              </span>
            </button>
            <NuxtLink v-for="link in NAVLINKS" :key="link.label" :to="link.url" class="text-black text-xl font-medium hover:underline" @click="isActive = false">
              {{ link.label }}
            </NuxtLink>
            <NuxtLink to="/#contact" class="btn-dark text-center mt-4" @click="isActive = false">Connect Me</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: opacity 0.2s, transform 0.3s;
}
.icon-fade-enter-from, .icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.menu-panel, .menu-panel * {
  caret-color: transparent !important;
  -webkit-user-modify: none !important;
}
.menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 320px;
  max-width: 90vw;
  background: #fff;
  box-shadow: -2px 0 24px 4px rgba(0,0,0,0.10);
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 0;
  user-select: none;
}
.menu-panel a, .menu-panel button {
  cursor: pointer;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
@media (max-width: 1023px) {
  .menu-panel {
    left: 50%;
    right: auto;
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 340px;
    height: auto;
    min-height: 300px;
    border-radius: 0;
  }
}
</style>
