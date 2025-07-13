<template>
  <div class="bg-gray-900 text-white">

    <!-- Features Intro -->
    <section class="w-full py-12 px-4 text-center">
      <h1 class="text-5xl font-bold mb-4 animate-fade-in-down">
        Unlock Your Team's Full Potential
      </h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-300 mb-8 animate-fade-in-up">
        OmniMetrics turns your match video into immediate, actionable insights - real-time metrics through advanced post-game analysis.
      </p>
    </section>

    <!-- Split 3D Analytics Graphic -->
    <section
      class="w-full py-12 px-4 flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-8"
    >
      <!-- Frame Image -->
      <img
        src="/src/assets/img/match-frame.png"
        alt="Match Frame View"
        class="w-11/12 md:w-2/5 rounded-3xl shadow-2xl animate-fade-in-up"
      />

      <!-- Double Right Arrow (desktop) -->
      <div class="hidden md:flex items-center justify-center">
        <svg
          class="w-12 h-12 text-blue-400 animate-pulse"
          fill="none" stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>

      <!-- Double Down Arrow (mobile) -->
      <div class="flex md:hidden items-center justify-center">
        <svg
          class="w-12 h-12 text-blue-400 animate-pulse transform rotate-90"
          fill="none" stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>

      <!-- Statistics Image -->
      <img
        src="/src/assets/img/match-statistics.png"
        alt="Analytics Statistics View"
        class="w-11/12 md:w-2/5 rounded-3xl shadow-2xl animate-fade-in-up"
      />
    </section>

    <!-- Game Metrics Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-center text-4xl font-bold mb-4 text-blue-400 animate-fade-in-down">
          Real-Time Game Metrics
        </h2>
        <p class="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12 animate-fade-in-up">
          Capture every touch, sprint and duel as it happens - instantly available to coaches and analysts.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Offensive Dynamics -->
          <div
            class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-left"
          >
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <h3 class="text-2xl font-bold text-white mb-3 text-center">
                Offensive Dynamics
              </h3>
              <ul class="text-gray-300 text-sm list-disc list-inside mb-4">
                <li>Possession & passing networks</li>
                <li>Off-ball run detection</li>
                <li>Sprint and acceleration zones</li>
                <li>Set-piece positioning</li>
              </ul>
              <p class="text-blue-400 text-center font-semibold">Turn attack data into winning plays.</p>
            </div>
          </div>

          <!-- Defensive Prowess -->
          <div
            class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up"
          >
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <h3 class="text-2xl font-bold text-white mb-3 text-center">
                Defensive Prowess
              </h3>
              <ul class="text-gray-300 text-sm list-disc list-inside mb-4">
                <li>Pressing efficiency heatmaps</li>
                <li>Tackle & interception counts</li>
                <li>Zone-based recovery stats</li>
                <li>Block & clearance tracking</li>
              </ul>
              <p class="text-purple-400 text-center font-semibold">Shore up your back-line with precision.</p>
            </div>
          </div>

          <!-- Player Performance -->
          <div
            class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-right"
          >
            <div class="bg-gray-900 p-6 rounded-3xl h-full flex flex-col justify-between">
              <h3 class="text-2xl font-bold text-white mb-3 text-center">
                Player Performance
              </h3>
              <ul class="text-gray-300 text-sm list-disc list-inside mb-4">
                <li>Distance, speed & workload</li>
                <li>Recovery time & fatigue estimates</li>
                <li>Duels won / lost</li>
                <li>On-ball vs off-ball heatmaps</li>
              </ul>
              <p class="text-green-400 text-center font-semibold">Maximize each player's output.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Features Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 text-blue-400 animate-fade-in-down">
          Core AI-Powered Modules
        </h2>
        <p class="text-gray-300 text-lg animate-fade-in-up">
          From tracking to tactical insights - a modular suite you can enable as you grow.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-left">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-blue-400 mr-4">01</div>
            <h3 class="text-xl font-bold">Player Tracking</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            Custom models detect and follow all players, even in crowded scenes.
          </p>
          <p class="text-gray-400 text-xs">
            Enables off-ball movement analysis, marking patterns, and player networks.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-up">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-green-400 mr-4">02</div>
            <h3 class="text-xl font-bold">Ball Trajectory</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            Robust detection of the ball in all phases of play, even when partly hidden.
          </p>
          <p class="text-gray-400 text-xs">
            Reconstruct passes, shots and aerial duels for precise event logging.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-right">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-purple-400 mr-4">03</div>
            <h3 class="text-xl font-bold">Field Homography</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            Automatic mapping of 2D video pixels to real-world pitch coordinates.
          </p>
          <p class="text-gray-400 text-xs">
            Foundation for spatial metrics like heatmaps, passing lanes & cluster analysis.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-left md:mt-8">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-yellow-400 mr-4">04</div>
            <h3 class="text-xl font-bold">Automated Highlights</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            AI-driven event detection surfaces key moments: goals, chances, tackles.
          </p>
          <p class="text-gray-400 text-xs">
            Ready-to-share clips with smart captioning and storyboard export.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-up md:mt-8">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-red-400 mr-4">05</div>
            <h3 class="text-xl font-bold">Tactical Patterns</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            Discover recurring formations, pressing triggers, and shape shifts.
          </p>
          <p class="text-gray-400 text-xs">
            Pattern library you can customize to your team's playing philosophy.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fade-in-right md:mt-8">
          <div class="flex items-center mb-4">
            <div class="text-3xl font-bold text-indigo-400 mr-4">06</div>
            <h3 class="text-xl font-bold">Fitness & Load</h3>
          </div>
          <p class="text-gray-300 text-sm mb-2">
            Monitor intensity, workload and recovery for optimized training plans.
          </p>
          <p class="text-gray-400 text-xs">
            Personalized alerts for fatigue, risk of injury and return-to-play metrics.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
