<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div>
    <section class="w-full text-gray-100 py-8 px-4 bg-transparent">
      <!-- Logo / Title Row at the Top -->
      <div class="flex justify-center items-center mb-4">
        <Logo class="hidden md:block" />
      </div>

      <!-- Main Heading -->
      <h1
        class="text-center text-3xl md:text-4xl font-bold text-secondary mb-2 uppercase"
      >
        UNLOCK YOUR TEAM'S FULL POTENTIAL
      </h1>

      <!-- Subheading / Tagline -->
      <p
        class="max-w-3xl mx-auto text-center text-sm md:text-base text-gray-300 leading-relaxed uppercase"
      >
        Our platform provides advanced, AI-driven analysis that helps coaches
        and players understand the game from every angle Whether it's
        in-possession, out-of-possession, or player fitness metrics.
      </p>
    </section>

    <section
      class="bg-cover bg-center bg-repeat-space"
      style="
        background-image: url('home-section-bg.png');
        background-blend-mode: saturation;
        background-size: 70%;
      "
    >
      <div class="p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] p-1 rounded-3xl w-full md:w-2/3 shadow-lg"
        >
          <div class="bg-white p-6 rounded-3xl">
            <h2 class="text-xl font-bold text-accent">
              GAIN THE UPPER HAND WHEN YOUR TEAM HAS THE BALL
            </h2>
            <p class="mt-4 text-black">
              Track how long and effectively your team maintains control.
              Measure passing accuracy, key passes, and distribution. Analyze
              success rates and distances covered during dribbles. Evaluate shot
              selection, accuracy, and goal-scoring chances. Understand the
              effectiveness of your offensive shape and player positioning.
              Examine the precision and strategy behind your corners,
              free-kicks, and offensive dead-ball situations.
            </p>
            <p class="mt-4 text-accent font-bold">AND MANY MORE!</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col gap-2 text-left">
          <h3 class="text-2xl font-semibold text-white uppercase">
            IN-POSSESSION METRICS
          </h3>
          <div class="border-t border-gray-500 w-full mx-auto mb-4"></div>
          <p class="text-red-500 font-bold text-xl">POSSESSION</p>
          <p class="text-red-500 font-bold text-xl">PASSING</p>
          <p class="text-red-500 font-bold text-xl">DRIBBLING</p>
          <p class="text-red-500 font-bold text-xl">SHOOTING</p>
          <p class="text-red-500 font-bold text-xl">OFFENSIVE MOVEMENT</p>
          <p class="text-red-500 font-bold text-xl">SET-PIECES</p>
        </div>
      </div>
      <div class="p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] p-1 rounded-3xl w-full md:w-2/3 shadow-lg"
        >
          <div class="bg-white p-6 rounded-3xl">
            <h2 class="text-xl font-bold text-accent">
              DICTATE THE GAME THROUGH DEFENSIVE PRECISION
            </h2>
            <p class="mt-4 text-black">
              See how well your team presses and forces turnovers. Monitor
              defensive actions and successful ball recoveries. Track your
              players' one-on-one challenges and successes. Assess your team's
              defensive shape, especially during opposition attacks. Measure how
              well your team prevents shot creation. Get insights on your
              defensive strategy during free kicks, corners, and other set-piece
              plays.
            </p>
            <p class="mt-4 text-accent font-bold">AND MANY MORE!</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col gap-2 text-left">
          <h3 class="text-2xl font-semibold text-white uppercase">
            OUT-OF-POSSESSION METRICS
          </h3>
          <div class="border-t border-gray-500 w-full mx-auto mb-4"></div>
          <p class="text-blue-500 font-bold text-xl">PRESSING</p>
          <p class="text-blue-500 font-bold text-xl">
            TACKLING, INTERCEPTION & RECOVERY
          </p>
          <p class="text-blue-500 font-bold text-xl">DEFENSIVE DUELS</p>
          <p class="text-blue-500 font-bold text-xl">POSITIONING & SHAPE</p>
          <p class="text-blue-500 font-bold text-xl">
            SHOT & CHANCE PREVENTION
          </p>
          <p class="text-blue-500 font-bold text-xl">SET-PIECES</p>
        </div>
      </div>
      <div class="p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] p-1 rounded-3xl w-full md:w-2/3 shadow-lg"
        >
          <div class="bg-white p-6 rounded-3xl">
            <h2 class="text-xl font-bold text-accent">
              KEEP YOUR TEAM PERFORMING AT THEIR PEAK
            </h2>
            <p class="mt-4 text-black">
              Track every meter your players run during games or training
              sessions. Monitor each player's sprinting capabilities. Gain
              insights into explosive movements and recoveries. Identify when
              and where your players exert the most effort. Understand the
              workload your players are handling. Measure physical strain and
              fatigue levels to optimize performance and prevent injuries.
            </p>
            <p class="mt-4 text-accent font-bold">AND MANY MORE!</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col gap-2 text-left">
          <h3 class="text-2xl font-semibold text-white uppercase">
            FITNESS METRICS
          </h3>
          <div class="border-t border-gray-500 w-full mx-auto mb-4"></div>
          <p class="text-red-500 font-bold text-xl">DISTANCE COVERED</p>
          <p class="text-red-500 font-bold text-xl">TOP SPEED</p>
          <p class="text-red-500 font-bold text-xl">
            ACCELERATION & DECELERATION
          </p>
          <p class="text-red-500 font-bold text-xl">HIGH INTENSITY RUNS</p>
          <p class="text-red-500 font-bold text-xl">WORK RATE</p>
          <p class="text-red-500 font-bold text-xl">PLAYER LOAD</p>
        </div>
      </div>
    </section>

    <div
      class="bg-gray-900 text-white p-8 rounded-lg flex flex-col items-center gap-6"
    >
      <div
        class="bg-gradient-to-r from-gray-900 text-center to-[#2a28a3] text-white px-20 py-4 rounded-lg md:rounded-full uppercase font-bold border border-white"
      >
        <h2 class="text-3xl font-bold text-white">
          GAME HIGHLIGHTS & TACTICAL RECOGNITION
        </h2>
        <p class="mt-2 text-gray-200">
          Relive the key moments of your game with automatically generated
          highlights, tactical recognition, and in-depth analytics. Whether it's
          a transition, build-up, or scoring chance, OmniMetrics spots the
          action for you with precise metrics and performance insights.
        </p>
      </div>
      <div class="md:flex gap-8 items-center">
        <div
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] p-0.5 shadow-lg"
        >
          <img
            src="/src/assets/img/football-trainer-platform.jpg"
            alt="Game Highlight"
            class="shadow-lg w-20% max-h-60"
          />
        </div>
        <div class="relative w-full mt-4 md:mt-0 md:w-1/3 items-end text-left">
          <p class="text-5xl font-extrabold uppercase text-gray-400">DYNAMIC</p>
          <p class="text-5xl font-extrabold uppercase text-gray-400 mt-4">
            EFFORTLESS
          </p>
          <p class="text-5xl font-extrabold uppercase text-gray-400 mt-4">
            ACTIONABLE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
