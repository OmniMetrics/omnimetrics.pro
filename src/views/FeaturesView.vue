<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const actionPointsField = ref([
  { number: '01', text: 'Automated Highlight Generation' },
  { number: '02', text: 'Tactical Pattern Recognition' },
  { number: '03', text: 'Performance Insights' },
])

const actionPointsLockerRoom = ref([
  { number: '04', text: 'Team Strategy Breakdown' },
  { number: '05', text: 'Detailed Metrics Extraction' },
  { number: '06', text: 'Game Model Analysis' },
])

const isSecondSectionVisible = ref(false)
const hasScrolled = ref(false)

const handleScroll = () => {
  if (!hasScrolled.value) {
    const secondSection = document.getElementById('game-analysis-section')
    if (secondSection) {
      const rect = secondSection.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.75) {
        isSecondSectionVisible.value = true
        hasScrolled.value = true
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="w-full text-gray-100 py-20 px-4 bg-gray-900">
      <h1 class="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
        Unlock Your Team's Full Potential
      </h1>
      <p class="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up">
        Our platform provides advanced, AI-driven analysis that helps coaches and players understand the game from every angle. 
        From real-time metrics to post-game analysis, we've got you covered.
      </p>
    </section>

    <!-- Real-time Metrics Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down text-blue-400">
          Game Metrics
        </h2>
        <p class="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12 animate-fade-in-up">
          Capture and analyze crucial data from the game, providing insights to inform strategic decisions.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- In-Possession Metrics -->
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform animate-fade-in-left">
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">
                  Offensive Dynamics
                </h3>
                <p class="text-gray-300 mb-4 text-center">
                  Track possession, passing accuracy, and attacking movements in real-time.
                </p>
              </div>
              <div>
                <div class="border-t border-gray-600 w-16 mb-4 mx-auto"></div>
                <div class="grid grid-cols-2 gap-2 text-center">
                  <p class="text-blue-400 font-bold text-base">Possession</p>
                  <p class="text-blue-400 font-bold text-base">Passing</p>
                  <p class="text-blue-400 font-bold text-base">Dribbling</p>
                  <p class="text-blue-400 font-bold text-base">Shooting</p>
                  <p class="text-blue-400 font-bold text-base">Movement</p>
                  <p class="text-blue-400 font-bold text-base">Set-Pieces</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Out-of-Possession Metrics -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform animate-fade-in-up">
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">
                  Defensive Prowess
                </h3>
                <p class="text-gray-300 mb-4 text-center">
                  Monitor pressing efficiency, defensive actions, and ball recoveries as they happen.
                </p>
              </div>
              <div>
                <div class="border-t border-gray-600 w-16 mb-4 mx-auto"></div>
                <div class="grid grid-cols-2 gap-2 text-center">
                  <p class="text-purple-400 font-bold text-base">Pressing</p>
                  <p class="text-purple-400 font-bold text-base">Tackling</p>
                  <p class="text-purple-400 font-bold text-base">Interceptions</p>
                  <p class="text-purple-400 font-bold text-base">Recovery</p>
                  <p class="text-purple-400 font-bold text-base">Positioning</p>
                  <p class="text-purple-400 font-bold text-base">Set-Pieces</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Fitness Metrics -->
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform animate-fade-in-right">
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">
                  Player Performance
                </h3>
                <p class="text-gray-300 mb-4 text-center">
                  Instantly access individual player stats, including distance covered and sprint data.
                </p>
              </div>
              <div>
                <div class="border-t border-gray-600 w-16 mb-4 mx-auto"></div>
                <div class="grid grid-cols-2 gap-2 text-center">
                  <p class="text-green-400 font-bold text-base">Distance</p>
                  <p class="text-green-400 font-bold text-base">Top Speed</p>
                  <p class="text-green-400 font-bold text-base">Acceleration</p>
                  <p class="text-green-400 font-bold text-base">Deceleration</p>
                  <p class="text-green-400 font-bold text-base">Work Rate</p>
                  <p class="text-green-400 font-bold text-base">Player Load</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Analysis Section -->
    <section id="game-analysis-section" class="py-16 md:py-24 bg-gray-900 transition-all duration-1000 ease-in-out" :class="{ 'opacity-0 translate-y-10': !isSecondSectionVisible, 'opacity-100 translate-y-0': isSecondSectionVisible }">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16 animate-fade-in-down">
          <h2 class="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down text-blue-400">
            Advanced Game Analysis
          </h2>
          <p class="max-w-2xl mx-auto text-gray-300 text-lg">
            Dive deep into your team's performance with our cutting-edge post-game analysis tools. 
            Automatically generate highlights, recognize tactical patterns, and gain actionable insights.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <div class="w-full lg:w-1/2 animate-fade-in-left">
            <div class="relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
              <div class="relative">
                <img
                  src="/src/assets/img/features-football-trainer-platform.jpg"
                  alt="Game Analysis Visualization"
                  class="rounded-2xl w-full h-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 animate-fade-in-right">
            <div class="pl-8 md:pl-0 grid grid-cols-1 gap-8">
              <div v-for="(point, index) in actionPointsField" :key="index" class="flex items-center space-x-4 group">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl font-bold text-white">{{ point.number }}</span>
                </div>
                <p class="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {{ point.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <div class="w-full lg:w-1/2 animate-fade-in-right">
            <div class="pr-8 md:pr-0 grid grid-cols-1 gap-8">
              <div v-for="(point, index) in actionPointsLockerRoom" :key="index" class="flex space-x-4 group">
                <p class="text-xl text-right self-center ml-auto md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {{ point.text }}
                </p>
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-xl font-bold text-white">{{ point.number }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 animate-fade-in-left">
            <div class="relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
              <div class="relative">
                <img
                  src="/src/assets/img/features-football-trainer-locker-room.jpg"
                  alt="Game Analysis Visualization"
                  class="rounded-2xl w-full h-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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

.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
