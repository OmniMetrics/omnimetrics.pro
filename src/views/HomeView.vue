<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// Reactive state for menu and section visibility
const menuOpen = ref(false)
const isHeroVisible = ref(false)
const isPlatformVisible = ref(false)
const isAnalyticsVisible = ref(false)
const isWorkflowVisible = ref(false)

// Use Vue Router's route utility
const route = useRoute()

// Check if a route is active and scroll to the top
const isActive = (path: string) => {
  if (route.path === path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling
    })
  }
  return route.path === path
}

// Toggle menu and body scroll
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  toggleBodyScroll()
}

// Close menu and enable body scroll
const closeMenu = () => {
  menuOpen.value = false
  toggleBodyScroll()
}

// Toggle body scroll based on menu state
const toggleBodyScroll = () => {
  document.body.style.overflow = menuOpen.value ? 'hidden' : 'auto'
}

// Scroll handler to check section visibility
const handleScroll = () => {
  const sections = [
    { id: 'hero-section', visible: isHeroVisible },
    { id: 'platform-section', visible: isPlatformVisible },
    { id: 'analytics-section', visible: isAnalyticsVisible },
    { id: 'workflow-section', visible: isWorkflowVisible },
  ]

  sections.forEach(({ id, visible }) => {
    const section = document.getElementById(id)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.75) {
        visible.value = true
      }
    }
  })
}

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Trigger on initial load
})

// Remove scroll event listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section id="hero-section" class="flex flex-col md:flex-row items-center justify-between py-8 md:py-16 px-4 transition-all duration-1000 ease-in-out" :class="{ 'opacity-0 translate-y-10': !isHeroVisible, 'opacity-100 translate-y-0': isHeroVisible }">
      <div class="md:w-3/5 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-down">
          OmniMetrics
        </h1>
        <h2 class="text-xl md:text-2xl font-extrabold mb-4 md:mb-6 animate-fade-in-down">
          #PlatformYourGame
        </h2>
        <p class="mb-6 md:mb-8 text-lg md:text-xl text-gray-300 animate-fade-in-up">
          OmniMetrics is the ultimate AI-powered platform designed to transform
          your football footage into actionable insights.
        </p>
        <button
          class="bg-gradient-to-r from-secondary to-accent text-white px-8 md:px-12 py-3 md:py-4 rounded-full hover:scale-105 transition-transform duration-300 uppercase font-bold animate-fade-in-up"
          @click="$emit('open-modal')"
        >
          Subscribe to the Platform
        </button>
      </div>
      <div class="md:w-2/5 mt-8 md:mt-0 relative flex justify-center items-center animate-fade-in-right">
        <img
          src="/src/assets/img/home-main-bg.png"
          alt="Platform Background"
          class="w-full h-auto"
        />
        <img
          src="/src/assets/img/home-main.png"
          alt="Platform Interface"
          class="w-3/4 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>

    <!-- Platform Overview Section -->
    <section id="platform-section" class="py-8 md:py-16 px-4 transition-all duration-1000 ease-in-out" :class="{ 'opacity-0 translate-y-10': !isPlatformVisible, 'opacity-100 translate-y-0': isPlatformVisible }">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:gap-8">
        <!-- Left Column: Platform Demo Image -->
        <div class="md:flex md:w-1/3 md:mt-0 justify-center items-center animate-fade-in-left">
          <img
            src="/src/assets/img/home-player-track.png"
            alt="Platform Demo"
            class="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300"
          />
        </div>

        <!-- Right Column: Text Content -->
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="uppercase text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-down text-blue-400">
            AI-Driven Platform
          </h2>
          <h3 class="text-xl md:text-2xl font-extrabold mb-4 md:mb-6 animate-fade-in-down">
            Unlock the power of data-driven football analysis
          </h3>
          <p class="mb-4 text-base md:text-lg text-gray-300 animate-fade-in-up">
            OmniMetrics uses cutting-edge AI to turn raw football footage into actionable insights. Whether analyzing matches or refining training, our platform delivers precise, team-specific metrics.</p>
          <p class="mb-4 text-base md:text-lg text-gray-300 animate-fade-in-up">
            Upload your videos, and our AI generates detailed reports on player performance, tactical patterns, and key events — no manual input needed.</p>
          <p class="mb-8 md:mb-16 text-xl font-extrabold text-gray-300 animate-fade-in-up">
            With OmniMetrics, you'll have the tools to make smarter decisions, optimize strategies, and elevate your team's performance to the next level.
          </p>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <!-- Card 1: Tailored Insights -->
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-left">
          <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full">
            <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-xl md:text-2xl font-bold mb-4">
              Tailored Insights
            </h3>
            <p class="text-gray-300 text-sm md:text-base">
              Customize your analytics to focus on the metrics that matter most. From player performance to tactical trends, OmniMetrics delivers insights tailored to your team's goals.
            </p>
          </div>
        </div>

        <!-- Card 2: Cost-Effective Solutions -->
        <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up">
          <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full">
            <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-xl md:text-2xl font-bold mb-4">
              Cost-Effective Solutions
            </h3>
            <p class="text-gray-300 text-sm md:text-base">
              Designed for clubs of all sizes, OmniMetrics offers flexible pricing plans to fit your budget. Get professional-grade analytics without breaking the bank.
            </p>
          </div>
        </div>

        <!-- Card 3: User-Friendly Interface -->
        <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-right">
          <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full">
            <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-xl md:text-2xl font-bold mb-4">
              User-Friendly Interface
            </h3>
            <p class="text-gray-300 text-sm md:text-base">
              No technical expertise required. OmniMetrics is built for coaches and analysts of all skill levels, ensuring seamless integration into your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>

      <!-- 3d Picture -->

    <div>
      <img src="/src/assets/img/home-3d-match.png" alt="3d" 
      class="w-full md:w-4/5 mx-auto p-4 md:p-0 mt-12 transform transition-transform duration-300" />
    </div>

    <!-- AI Workflow Section -->
    <section id="workflow-section" class="py-8 md:py-16 px-4 transition-all duration-1000 ease-in-out" :class="{ 'opacity-0 translate-y-10': !isWorkflowVisible, 'opacity-100 translate-y-0': isWorkflowVisible }">
      <div class="container mx-auto">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-down text-blue-400">
            How The Platform Works
          </h2>
          <h3 class="text-xl md:text-2xl font-extrabold mb-4 md:mb-6 animate-fade-in-down">
            A seamless process to transform your footage into actionable insights
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <!-- Arrow Connectors -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-1/2 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-3/4 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>

          <!-- Box 1: Record -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 z-10 animate-fade-in-left">
            <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg">
                1
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-xl md:text-2xl font-bold mb-4">
                Record
              </h3>
              <p class="text-gray-300 text-sm md:text-base">
                Capture your match or training session using any camera.
              </p>
            </div>
          </div>

          <!-- Box 2: Upload -->
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 z-10 animate-fade-in-up">
            <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg">
                2
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-xl md:text-2xl font-bold mb-4">
                Upload
              </h3>
              <p class="text-gray-300 text-sm md:text-base">
                Easily upload your footage to the OmniMetrics platform.
              </p>
            </div>
          </div>

          <!-- Box 3: AI -->
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 z-10 animate-fade-in-up">
            <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-green-600 to-teal-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg">
                3
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-xl md:text-2xl font-bold mb-4">
                AI Analysis
              </h3>
              <p class="text-gray-300 text-sm md:text-base">
                Our AI processes the footage and extracts key insights.
              </p>
            </div>
          </div>

          <!-- Box 4: Insights -->
          <div class="bg-gradient-to-r from-yellow-600 to-orange-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 z-10 animate-fade-in-right">
            <div class="bg-gray-900 p-6 md:p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-600 to-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg">
                4
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 text-xl md:text-2xl font-bold mb-4">
                Insights Delivered
              </h3>
              <p class="text-gray-300 text-sm md:text-base">
                Receive actionable insights to elevate your team's performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.5s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.5s ease-out;
}
</style>