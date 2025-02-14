<script setup lang="ts">
// No need to import the Logo component anymore
</script>

<template>
  <main class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="flex flex-col md:flex-row items-center justify-between py-16 px-4">
      <div class="md:w-3/5 text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8">
          PLATFORM<br />YOUR GAME
        </h1>
        <p class="mb-8 text-xl md:text-2xl text-gray-300">
          OmniMetrics is the ultimate AI-powered platform designed to transform
          your football footage into actionable insights.
        </p>
        <button
          class="bg-gradient-to-r from-secondary to-accent text-white px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300 uppercase font-bold"
          @click="$emit('open-modal')"
        >
          Subscribe to The Platform
        </button>
      </div>
      <div class="md:w-2/5 mt-8 md:mt-0 relative flex justify-center items-center">
        <img
          src="/src/assets/img/home-main-bg.png"
          alt="Platform Image"
          class="w-full h-auto"
        />
        <img
          src="/src/assets/img/home-main.jpg"
          alt="Platform Image"
          class="w-3/4 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>

    <!-- Platform Overview Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-secondary uppercase text-3xl md:text-4xl font-bold mb-4">
            The OmniMetrics Platform
          </h2>
          <h3 class="text-white uppercase text-xl md:text-2xl font-semibold mb-4">
            AI-DRIVEN MATCH AND TRAINING VIDEO ANALYSIS
          </h3>
          <p class="mb-4 text-lg text-gray-300">
            OmniMetrics harnesses AI-driven analysis to extract key performance
            metrics and game statistics from your video footage — no manual input
            required.
          </p>
          <p class="mb-4 text-lg text-gray-300">
            Simply upload your match or training videos, and our platform will
            automatically process the footage, delivering critical data such as
            physical performance, tactical insights, and event breakdowns.
          </p>
          <p class="mb-4 text-lg text-gray-300">
            Within hours, your tailored reports will be available, helping you
            make informed, data-driven decisions to elevate your team's
            performance.
          </p>
          <button
            class="bg-gradient-to-r from-secondary to-accent text-white px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300 uppercase font-bold"
          >
            Learn More About The Platform
          </button>
        </div>
        <div class="md:w-1/3 mt-8 md:mt-0 flex justify-center items-center">
          <img
            src="/src/assets/img/home-gif.png"
            alt="Platform Image"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Customised Analytics Section -->
    <section class="py-16 px-4 bg-gray-800">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-secondary uppercase text-3xl md:text-4xl font-bold mb-4">
            CUSTOMISED, AFFORDABLE ANALYTICS FOR ALL TEAMS
          </h2>
          <p class="text-white uppercase text-lg md:text-xl font-light">
            Our platform isn't just another analysis tool. It's built with your
            club's specific needs in mind!
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase text-xl font-bold mb-4">
                CUSTOMISED ANALYTICS
              </h3>
              <p class="text-gray-300">
                Clubs can choose the metrics that matter most, ensuring each
                report delivers targeted insights aligned with their unique
                strategies and goals.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 uppercase text-xl font-bold mb-4">
                LOCALIZED, COST-EFFECTIVE SUPPORT
              </h3>
              <p class="text-gray-300">
                OmniMetrics fits your club's budget and structure. Whether you're
                looking for a primary analysis tool or a complement to existing
                staff, our platform offers unmatched flexibility.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 uppercase text-xl font-bold mb-4">
                USER-FRIENDLY EXPERIENCE
              </h3>
              <p class="text-gray-300">
                No technical know-how required. OmniMetrics is designed to be easy
                to use for all coaching staff, regardless of their tech
                background, allowing for seamless integration into your club's
                workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Real-Time Insights Section -->
    <section class="py-16 px-4 bg-gray-900">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-secondary uppercase text-3xl md:text-4xl font-bold mb-4">
            REAL-TIME INSIGHTS, PERFORMANCE TRACKING, AND METRICS
          </h2>
          <p class="text-white uppercase text-lg md:text-xl font-light">
            Our platform provides timely analysis of your team's match or
            training performance.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase text-xl font-bold mb-4">
                REAL-TIME DATA INSIGHTS
              </h3>
              <p class="text-gray-300">
                Submit your footage, and receive a full analysis quickly, helping
                you prepare for the next game or training session with precision.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 uppercase text-xl font-bold mb-4">
                PERFORMANCE TRACKING OVER TIME
              </h3>
              <p class="text-gray-300">
                Monitor how your team evolves over the season. OmniMetrics
                highlights key patterns, strengths, and areas of improvement
                across multiple matches.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-900 p-8 rounded-3xl h-full">
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 uppercase text-xl font-bold mb-4">
                COMPREHENSIVE METRICS
              </h3>
              <p class="text-gray-300">
                From in and out of possession metrics to fitness analysis,
                OmniMetrics delivers rich data that dives deep into every facet of
                your team's play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Workflow Section -->
    <section class="py-16 px-4 bg-gray-800">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-secondary uppercase text-3xl md:text-4xl font-bold mb-4">
            HOW IT WORKS
          </h2>
          <p class="text-white uppercase text-lg md:text-xl font-light">
            A seamless workflow to transform your footage into actionable insights.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <!-- Arrow Connectors -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-1/2 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>
          <div class="hidden md:block absolute top-1/2 left-3/4 w-1/4 h-1 bg-gray-600 transform -translate-y-1/2 z-0"></div>

          <!-- Box 1: Record -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
            <div class="bg-gray-900 p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                1
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase text-xl font-bold mb-4">
                RECORD YOUR<br />GAME OR TRAINING
              </h3>
              <p class="text-gray-300">
                Capture your match or training session with any camera.
              </p>
            </div>
          </div>

          <!-- Box 2: Upload -->
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
            <div class="bg-gray-900 p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                2
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 uppercase text-xl font-bold mb-4">
                UPLOAD TO THE<br />OM PLATFORM
              </h3>
              <p class="text-gray-300">
                Easily upload your footage to the OmniMetrics platform.
              </p>
            </div>
          </div>

          <!-- Box 3: AI -->
          <div class="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
            <div class="bg-gray-900 p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-green-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                3
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 uppercase text-xl font-bold mb-4">
                LET AI DO<br />THE WORK
              </h3>
              <p class="text-gray-300">
                Our AI processes the footage and extracts key insights.
              </p>
            </div>
          </div>

          <!-- Box 4: Insights -->
          <div class="bg-gradient-to-r from-yellow-600 to-orange-600 p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
            <div class="bg-gray-900 p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center relative">
              <!-- Number Badge -->
              <div class="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-600 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                4
              </div>
              <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 uppercase text-xl font-bold mb-4">
                GET INSTANT<br />INSIGHTS
              </h3>
              <p class="text-gray-300">
                Receive actionable insights to elevate your team's performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
