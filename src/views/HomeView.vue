<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<template>
  <main>
    <Logo class="hidden md:block" />
    <section
      class="flex flex-col md:flex-row items-center justify-between mt-8"
    >
      <div class="md:w-3/5 text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-12">
          PLATFORM<br />YOUR GAME
        </h1>
        <p class="mb-8 text-2xl">
          OmniMetrics is the ultimate AI-powered platform designed to transform
          your football footage into actionable insights.
        </p>
        <button
          class="bg-gradient-to-r from-gray-900 to-[#2a28a3] text-white px-20 py-4 rounded-full hover:bg-indigo-700 uppercase font-bold border border-white"
        >
          Subscribe to The platform
        </button>
      </div>
      <div
        class="md:w-2/5 mt-8 md:mt-0 relative flex justify-center items-center"
      >
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
    <section
      class="flex flex-col md:flex-row items-center justify-between mt-20 space-y-8 md:space-y-0 md:space-x-28"
    >
      <div class="md:w-2/3 text-center md:text-left">
        <h2 class="text-secondary uppercase text-4xl font-bold mb-4">
          The OmniMetrics Platform
        </h2>
        <h3 class="text-white uppercase underline text-2xl font-semibold mb-4">
          AI-DRIVEN MATCH and training video analysis
        </h3>
        <p class="mb-4 text-xl text-justify">
          OmniMetrics harnesses AI-driven analysis to extract key performance
          metrics and game statistics from your video footage — no manual input
          required.
        </p>
        <p class="mb-4 text-xl text-justify">
          Simply upload your match or training videos, and our platform will
          automatically process the footage, delivering critical data such as
          physical performance, tactical insights, and event breakdowns.
        </p>
        <p class="mb-4 text-xl text-justify">
          Within hours, your tailored reports will be available, helping you
          make informed, data-driven decisions to elevate your team's
          performance.
        </p>
        <button
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] font-bold uppercase rounded-full p-0.5 mt-4"
        >
          <span
            class="flex py-4 px-24 w-full text-sm text-black bg-white rounded-full p-2"
          >
            Learn More About The Platform
          </span>
        </button>
      </div>
      <div class="md:w-1/3 mt-8 md:mt-0 flex justify-center items-center">
        <img
          src="/src/assets/img/home-gif.png"
          alt="Platform Image"
          class="w-full h-auto"
        />
      </div>
    </section>
    <div
      class="bg-cover bg-center bg-no-repeat w-full h-full"
      style="
        background-image: url('/home-section-bg.png');
        background-blend-mode: saturation;
      "
    >
      <section
        class="flex flex-col items-center justify-between mt-20 space-y-8 px-4 md:px-0"
      >
        <div class="text-left w-full md:w-auto">
          <h2 class="text-secondary uppercase text-4xl font-bold mb-4">
            CUSTOMISED, AFFORDABLE ANALYTICS FOR ALL TEAMS
          </h2>
          <h3 class="text-white uppercase text-md font-light">
            Our platform isn't just another analysis tool. it's built with your
            club's specific needs in mind!
          </h3>
        </div>
        <div
          class="flex flex-col items-start space-y-6 md:ml-24 xl:ml-48 xl:mr-16 w-full md:w-auto"
        >
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              CUSTOMISED ANALYTICS
            </h4>
            <p class="text-white text-lg">
              Clubs can choose the metrics that matter most, ensuring each
              report delivers targeted insights aligned with their unique
              strategies and goals.
            </p>
          </div>
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              Localized, Cost-Effective Support
            </h4>
            <p class="text-white text-lg">
              OmniMetrics fits your club's budget and structure. Whether you're
              looking for a primary analysis tool or a complement to existing
              staff, our platform offers unmatched flexibility.
            </p>
          </div>
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              User-Friendly Experience
            </h4>
            <p class="text-white text-lg">
              No technical know-how required. OmniMetrics is designed to be easy
              to use for all coaching staff, regardless of their tech
              background, allowing for seamless integration into your club's
              workflow.
            </p>
          </div>
        </div>
        <img
          src="/src/assets/img/home-1.png"
          alt="Additional Image"
          class="hidden lg:block w-1/8 h-auto absolute left-0 transform translate-x-1/3 -translate-y-8 pb-4 opacity-40 z-10"
        />
      </section>
      <section
        class="flex flex-col items-center justify-between mt-20 space-y-8 px-4 md:px-0"
      >
        <div class="text-right w-full md:w-auto z-20">
          <h2 class="text-secondary uppercase text-3xl font-bold mb-4">
            Real-Time Insights, Performance Tracking, and METRICS
          </h2>
          <h3 class="text-white uppercase text-md font-light">
            Our platform provides timely analysis of your team's match or
            training performance
          </h3>
        </div>
        <div
          class="flex flex-col text-right items-end space-y-6 md:mr-24 xl:mr-52 xl:ml-16 w-full md:w-auto"
        >
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              Real-Time Data Insights
            </h4>
            <p class="text-white text-lg">
              Submit your footage, and receive a full analysis quickly, helping
              you prepare for the next game or training session with precision.
            </p>
          </div>
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              Performance Tracking Over Time
            </h4>
            <p class="text-white text-lg">
              Monitor how your team evolves over the season. OmniMetrics
              highlights key patterns, strengths, and areas of improvement
              across multiple matches.
            </p>
          </div>
          <div>
            <h4 class="text-accent uppercase text-xl font-bold mb-1">
              Comprehensive Metrics
            </h4>
            <p class="text-white text-lg">
              From in and out of possession metrics to fitness analysis,
              OmniMetrics delivers rich data that dives deep into every facet of
              your team's play.
            </p>
          </div>
        </div>
        <img
          src="/src/assets/img/home-2.png"
          alt="Additional Image"
          class="hidden lg:block w-1/8 h-auto absolute right-0 transform -translate-y-24 pb-4 opacity-40 z-10"
        />
      </section>
      <section
        class="flex flex-col items-center justify-between mt-20 space-y-8 bg-contain bg-center bg-no-repeat bg-primary bg-opacity-20 w-full h-full"
        style="
          background-image: url('/home-ai.png');
          background-blend-mode: darken;
        "
      >
        <div class="text-left w-full">
          <h2
            class="text-4xl md:text-6xl font-normal text-white uppercase mb-4"
          >
            <span class="font-extrabold">RECORD</span> YOUR<br />GAME OR
            TRAINING
          </h2>
        </div>
        <div class="text-right w-full">
          <h2
            class="text-4xl md:text-6xl font-normal text-white uppercase mb-4"
          >
            <span class="font-extrabold">Upload</span> to the<br />OM Platform
          </h2>
        </div>
        <div class="text-left w-full">
          <h2
            class="text-4xl md:text-6xl font-normal text-white uppercase mb-4"
          >
            Let <span class="font-extrabold">AI</span> Do<br />the Work
          </h2>
        </div>
        <div class="text-right w-full">
          <h2
            class="text-4xl md:text-6xl font-normal text-white uppercase mb-4"
          >
            Get <span class="font-extrabold">Instant</span><br />Insights
          </h2>
        </div>
      </section>
    </div>
    <div class="text-left w-full">
      <button
        class="mt-4 bg-gradient-to-r from-[#3533cd] to-[#ff4646] text-white px-20 py-4 rounded-full border border-white hover:bg-gradient-to-r hover:from-[#2a28a3] hover:to-[#ff4646] uppercase font-bold"
      >
        JOIN THE OM PLATFORM NOW!
      </button>
    </div>
    <section class="relative flex items-center justify-center mt-20">
      <div class="absolute w-full h-0.5 bg-white"></div>
      <div
        class="w-32 h-32 border-2 border-white rounded-full bg-transparent"
      ></div>
    </section>
    <section class="flex flex-col items-center justify-center mt-20 relative">
      <h2 class="text-4xl font-bold text-secondary uppercase text-center z-30">
        READY TO ELEVATE YOUR PERFORMANCE?
      </h2>
      <button
        class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] font-bold uppercase rounded-full p-0.5 mt-8 z-30"
      >
        <span
          class="flex py-4 px-24 w-full text-sm text-black bg-white rounded-full p-2"
        >
          DROP US A MESSAGE
        </span>
      </button>
      <img
        src="@/assets/img/home-contact.png"
        alt="Elevate Performance"
        class="hidden md:block absolute left-0 transform -translate-x-1/3 mt-24 pb-4 w-2/4 z-20"
      />
    </section>
  </main>
</template>
