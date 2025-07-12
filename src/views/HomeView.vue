<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const isHeroVisible = ref(false)
const isDataVisible = ref(false)
const isPlatformVisible = ref(false)
const isWorkflowVisible = ref(false)

const route = useRoute()
const isActive = (path: string) => {
  if (route.path === path) window.scrollTo({ top: 0, behavior: 'smooth' })
  return route.path === path
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : 'auto'
}

const handleScroll = () => {
  ;[
    { id: 'hero-section', visible: isHeroVisible },
    { id: 'data-section', visible: isDataVisible },
    { id: 'platform-section', visible: isPlatformVisible },
    { id: 'workflow-section', visible: isWorkflowVisible },
  ].forEach(({ id, visible }) => {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.75) {
      visible.value = true
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <main class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section
      id="hero-section"
      class="flex flex-col md:flex-row items-center justify-between py-12 px-6 transition-all duration-700"
      :class="{ 'opacity-0 translate-y-8': !isHeroVisible, 'opacity-100 translate-y-0': isHeroVisible }"
    >
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          OmniMetrics
        </h1>
        <h2 class="text-2xl md:text-3xl font-extrabold mb-6 text-blue-400 animate-fade-in-down">
          #PlatformYourGame
        </h2>
        <p class="text-lg text-gray-300 mb-8 animate-fade-in-up">
          Transform your football footage into tactical, actionable insights - via upload or seamless integration.
        </p>
        <button
          class="bg-gradient-to-r from-secondary to-accent px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform duration-300 animate-fade-in-up"
          @click="$emit('open-modal')"
        >
          Request a Demo
        </button>
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center animate-fade-in-right">
        <img src="/src/assets/img/home-main.png" alt="OmniMetrics Dashboard" class="w-4/5" />
      </div>
    </section>

    <!-- Smarter Data Section -->
    <section
      id="data-section"
      class="py-12 px-6 bg-gray-800 transition-all duration-700"
      :class="{ 'opacity-0 translate-y-8': !isDataVisible, 'opacity-100 translate-y-0': isDataVisible }"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 text-blue-400 animate-fade-in-down">
          Smarter Data, Better Football
        </h2>
        <p class="text-gray-300 mb-8 animate-fade-in-up">
          Every club deserves real-time, accessible insights - no more siloed or outdated reports.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="animate-fade-in-left">
            <h3 class="font-bold text-xl mb-2">Accessible Metrics</h3>
            <p class="text-gray-300 text-sm">
              From heat maps to off-ball patterns, every moment quantified.
            </p>
          </div>
          <div class="animate-fade-in-up">
            <h3 class="font-bold text-xl mb-2">AI & Computer Vision</h3>
            <p class="text-gray-300 text-sm">
              Automated player, ball & tactical data-straight from your footage.
            </p>
          </div>
          <div class="animate-fade-in-right">
            <h3 class="font-bold text-xl mb-2">Flexible Integration</h3>
            <p class="text-gray-300 text-sm">
              Upload video or hook into your existing camera & broadcast feeds.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI‑Driven Platform Section -->
    <section
      id="platform-section"
      class="py-12 px-6 transition-all duration-700"
      :class="{ 'opacity-0 translate-y-8': !isPlatformVisible, 'opacity-100 translate-y-0': isPlatformVisible }"
    >
      <div class="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div class="md:w-1/2 animate-fade-in-left">
          <img
            src="/src/assets/img/home-player-track.png"
            alt="Player Tracking Demo"
            class="rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4 text-blue-400 animate-fade-in-down">
            AI-Driven Platform
          </h2>
          <p class="text-gray-300 mb-4 animate-fade-in-up">
            Our AI models detect and track every player, reconstruct ball trajectories - even when occluded - and map footage into field-coordinates automatically.
          </p>
          <p class="text-gray-300 mb-4 animate-fade-in-up">
            Generate heat maps, sprint analyses, and tactical reports instantly - no manual tagging.
          </p>
          <p class="text-gray-300 mb-6 animate-fade-in-up">
            Plug into your cameras or simply upload your clips - OmniMetrics adapts to your workflow.
          </p>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-left">
          <h3 class="font-bold text-xl mb-2 text-purple-500">Custom Insights</h3>
          <p class="text-gray-300 text-sm">
            Tailored metrics that align with your club's tactical philosophy.
          </p>
        </div>
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
          <h3 class="font-bold text-xl mb-2 text-blue-500">Cost-Effective</h3>
          <p class="text-gray-300 text-sm">
            Flexible plans for clubs of all levels - no hidden fees or licensing surprises.
          </p>
        </div>
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-right">
          <h3 class="font-bold text-xl mb-2 text-green-500">User-Friendly</h3>
          <p class="text-gray-300 text-sm">
            Designed for coaches and analysts - zero technical setup needed on your end.
          </p>
        </div>
      </div>
    </section>

    <!-- AI Workflow Section -->
    <section
      id="workflow-section"
      class="py-12 px-6 bg-gray-800 transition-all duration-700"
      :class="{ 'opacity-0 translate-y-8': !isWorkflowVisible, 'opacity-100 translate-y-0': isWorkflowVisible }"
    >
      <div class="max-w-4xl mx-auto text-center mb-6">
        <h2 class="text-3xl font-bold mb-2 text-blue-400 animate-fade-in-down">
          How It Works
        </h2>
        <p class="text-gray-300 italic mb-8 animate-fade-in-up">
          A seamless process to transform your footage into tactical, actionable insights.
        </p>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <!-- Step 1 -->
        <div class="bg-gray-900 p-6 rounded-2xl shadow-lg text-center animate-fade-in-left md:w-1/4">
          <div class="text-4xl font-bold mb-2 text-purple-500">1</div>
          <h3 class="font-bold mb-2">Capture</h3>
          <p class="text-gray-300 text-sm">
            Use your cameras, broadcast feed or simply upload video.
          </p>
        </div>

        <!-- Arrow -->
        <div class="hidden md:flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Step 2 -->
        <div class="bg-gray-900 p-6 rounded-2xl shadow-lg text-center animate-fade-in-up md:w-1/4">
          <div class="text-4xl font-bold mb-2 text-green-500">2</div>
          <h3 class="font-bold mb-2">Analyze</h3>
          <p class="text-gray-300 text-sm">
            Our AI extracts player, ball & tactical data instantly.
          </p>
        </div>

        <!-- Arrow -->
        <div class="hidden md:flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Step 3 -->
        <div class="bg-gray-900 p-6 rounded-2xl shadow-lg text-center animate-fade-in-up md:w-1/4">
          <div class="text-4xl font-bold mb-2 text-blue-500">3</div>
          <h3 class="font-bold mb-2">Insights</h3>
          <p class="text-gray-300 text-sm">
            Dashboards, heat maps & key event breakdowns.
          </p>
        </div>

        <!-- Arrow -->
        <div class="hidden md:flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Step 4 -->
        <div class="bg-gray-900 p-6 rounded-2xl shadow-lg text-center animate-fade-in-right md:w-1/4">
          <div class="text-4xl font-bold mb-2 text-yellow-500">4</div>
          <h3 class="font-bold mb-2">Act</h3>
          <p class="text-gray-300 text-sm">
            Make data-driven decisions on and off the pitch.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@keyframes fadeInDown { from { opacity:0; transform:translateY(-20px) } to { opacity:1; transform:translateY(0) } }
@keyframes fadeInUp   { from { opacity:0; transform:translateY(20px) }  to { opacity:1; transform:translateY(0) } }
@keyframes fadeInLeft { from { opacity:0; transform:translateX(-20px) } to { opacity:1; transform:translateX(0) } }
@keyframes fadeInRight{ from { opacity:0; transform:translateX(20px) }  to { opacity:1; transform:translateX(0) } }

.animate-fade-in-down { animation: fadeInDown .6s ease-out; }
.animate-fade-in-up   { animation: fadeInUp   .6s ease-out; }
.animate-fade-in-left { animation: fadeInLeft .6s ease-out; }
.animate-fade-in-right{ animation: fadeInRight .6s ease-out; }
</style>
