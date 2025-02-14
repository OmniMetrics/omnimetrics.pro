<script setup lang="ts">
// No need to import the Logo component anymore
</script>

<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="w-full text-gray-100 py-16 px-4 bg-gray-900">
      <!-- Main Heading -->
      <h1 class="text-center text-4xl md:text-5xl font-bold text-accent mb-4 uppercase">
        UNLOCK YOUR TEAM'S FULL POTENTIAL
      </h1>

      <!-- Subheading / Tagline -->
      <p class="max-w-3xl mx-auto text-center text-sm md:text-lg text-gray-300 leading-relaxed uppercase">
        Our platform provides advanced, AI-driven analysis that helps coaches
        and players understand the game from every angle. Whether it's
        in-possession, out-of-possession, or player fitness metrics.
      </p>
    </section>

    <!-- Metrics Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Grid Layout for Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- In-Possession Metrics -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h2 class="text-2xl font-bold text-white mb-4">
                GAIN THE UPPER HAND WHEN YOUR TEAM HAS THE BALL
              </h2>
              <p class="text-gray-300 mb-6">
                Track how long and effectively your team maintains control.
                Measure passing accuracy, key passes, and distribution. Analyze
                success rates and distances covered during dribbles.
              </p>
              <h3 class="text-xl font-semibold text-white uppercase mb-4">
                IN-POSSESSION METRICS
              </h3>
              <div class="border-t border-gray-600 w-16 mb-6"></div>
              <div class="grid grid-cols-2 gap-4">
                <p class="text-purple-400 font-bold text-lg">POSSESSION</p>
                <p class="text-purple-400 font-bold text-lg">PASSING</p>
                <p class="text-purple-400 font-bold text-lg">DRIBBLING</p>
                <p class="text-purple-400 font-bold text-lg">SHOOTING</p>
                <p class="text-purple-400 font-bold text-lg">MOVEMENT</p>
                <p class="text-purple-400 font-bold text-lg">SET-PIECES</p>
              </div>
            </div>
          </div>

          <!-- Out-of-Possession Metrics -->
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h2 class="text-2xl font-bold text-white mb-4">
                DICTATE THE GAME THROUGH DEFENSIVE PRECISION
              </h2>
              <p class="text-gray-300 mb-6">
                See how well your team presses and forces turnovers. Monitor
                defensive actions and successful ball recoveries. Track your
                players' one-on-one challenges and successes.
              </p>
              <h3 class="text-xl font-semibold text-white uppercase mb-4">
                OUT-OF-POSSESSION METRICS
              </h3>
              <div class="border-t border-gray-600 w-16 mb-6"></div>
              <div class="grid grid-cols-2 gap-4">
                <p class="text-blue-400 font-bold text-lg">PRESSING</p>
                <p class="text-blue-400 font-bold text-lg">TACKLING</p>
                <p class="text-blue-400 font-bold text-lg">INTERCEPTION</p>
                <p class="text-blue-400 font-bold text-lg">RECOVERY</p>
                <p class="text-blue-400 font-bold text-lg">POSITIONING</p>
                <p class="text-blue-400 font-bold text-lg">SET-PIECES</p>
              </div>
            </div>
          </div>

          <!-- Fitness Metrics -->
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h2 class="text-2xl font-bold text-white mb-4">
                KEEP YOUR TEAM PERFORMING AT THEIR PEAK
              </h2>
              <p class="text-gray-300 mb-6">
                Track every meter your players run during games or training
                sessions. Monitor each player's sprinting capabilities. Gain
                insights into explosive movements and recoveries.
              </p>
              <h3 class="text-xl font-semibold text-white uppercase mb-4">
                FITNESS METRICS
              </h3>
              <div class="border-t border-gray-600 w-16 mb-6"></div>
              <div class="grid grid-cols-2 gap-4">
                <p class="text-green-400 font-bold text-lg">DISTANCE</p>
                <p class="text-green-400 font-bold text-lg">TOP SPEED</p>
                <p class="text-green-400 font-bold text-lg">ACCELERATION</p>
                <p class="text-green-400 font-bold text-lg">DECELERATION</p>
                <p class="text-green-400 font-bold text-lg">WORK RATE</p>
                <p class="text-green-400 font-bold text-lg">PLAYER LOAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Highlights Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold text-white mb-4">
            GAME HIGHLIGHTS & TACTICAL RECOGNITION
          </h2>
          <p class="max-w-2xl mx-auto text-gray-300">
            Relive the key moments of your game with automatically generated
            highlights, tactical recognition, and in-depth analytics. Whether it's
            a transition, build-up, or scoring chance, OmniMetrics spots the
            action for you with precise metrics and performance insights.
          </p>
        </div>
        <div class="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/src/assets/img/football-trainer-platform.jpg"
                alt="Game Highlight"
                class="rounded-3xl w-full h-auto"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 text-left">
            <p class="text-5xl font-extrabold uppercase text-gray-400">DYNAMIC</p>
            <p class="text-5xl font-extrabold uppercase text-gray-400 mt-4">EFFORTLESS</p>
            <p class="text-5xl font-extrabold uppercase text-gray-400 mt-4">ACTIONABLE</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>