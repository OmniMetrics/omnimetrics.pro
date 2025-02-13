<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div class="relative w-full min-h-screen">
    <!-- Background container with bars -->
    <div
      class="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <!-- Bar #1 -->
      <img
        src="/src/assets/img/about-bars.png"
        alt="Vertical bar"
        class="absolute top-[200px] left-[10%] h-20%"
      />
      <!-- Bar #2 -->
      <img
        src="/src/assets/img/about-bars.png"
        alt="Vertical bar"
        class="absolute top-[100px] left-[40%] h-[60%]"
      />
      <!-- Bar #3 -->
      <img
        src="/src/assets/img/about-bars.png"
        alt="Vertical bar"
        class="absolute top-[200px] left-[75%] h-[80%]"
      />
      <!-- ...add as many bars/images as you want... -->
    </div>
    <div class="relative z-10 w-full min-h-screen bg-transparent text-gray-100">
      <section class="w-full text-gray-100 py-8 px-4 bg-transparent">
        <!-- Logo / Title Row at the Top -->
        <div class="flex justify-center items-center mb-4">
          <Logo class="hidden md:block" />
        </div>

        <!-- Main Heading -->
        <h1
          class="text-center text-3xl md:text-4xl font-bold text-secondary mb-2 uppercase"
        >
          THE OMNIMETRICS TEAM
        </h1>

        <!-- Subheading / Tagline -->
        <p
          class="max-w-3xl mx-auto text-center text-sm md:text-base text-gray-300 leading-relaxed uppercase"
        >
          Omnimetrics is founded on the synergy of two professionals whose
          complementary expertise drives the company's vision and operations.
        </p>
      </section>


      <section
        class="flex flex-col md:flex-row mx-auto items-center w-full max-w-5xl py-8 text-gray-100"
      >
        <!-- LEFT SIDE (Text) -->
        <div class="w-full md:w-2/3 md:pr-8">
          <!-- Name label -->
          <div
            class="text-lg font-bold uppercase text-secondary tracking-wider mb-2"
          >
            PEDRO BRITO
          </div>

          <!-- Bordered box for main paragraph -->
          <div
            class="relative border-l-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl"
          >
            <p>
              Pedro has years of federated football experience in the UK and Portugal, 
              bringing deep tactical and strategic expertise. With a BSc in Football Studies, 
              he equips clubs at all levels with insights to optimize performance and gain a competitive edge.
            </p>

            <!-- Partial top border: left half only, fading to transparent -->
            <span
              class="pointer-events-none absolute top-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Partial bottom border: left half only, fading to transparent -->
            <span
              class="pointer-events-none absolute bottom-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Bottom small label -->
            <div class="mt-4 text-md text-gray-400">
              BSc in Football Studies
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE (Image) -->
        <div
          class="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4 flex justify-center md:justify-end"
        >
          <!-- Example image; replace with your own. 
           Use object-cover or object-contain as desired. -->
          <img
            src="/src/assets/img/about-pedro-b.png"
            alt="Person's Profile"
            class="rounded-lg shadow-lg max-w-xs"
          />
        </div>
      </section>

      <section
        class="flex flex-col md:flex-row mx-auto items-start w-full max-w-5xl py-8 text-gray-100"
      >
        <!-- LEFT SIDE (Image) -->
        <div
          class="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4 flex justify-center md:justify-end"
        >
          <!-- Example image; replace with your own. 
           Use object-cover or object-contain as desired. -->
          <img
            src="/src/assets/img/about-eduardo.png"
            alt="Person's Profile"
            class="rounded-lg shadow-lg max-w-xs"
          />
        </div>

        <!-- Right SIDE (Text) -->
        <div class="w-full md:w-2/3 md:pl-8 text-right">
          <!-- Name label -->
          <div
            class="text-lg font-bold uppercase text-secondary tracking-wider mb-2"
          >
            EDUARDO BRITO
          </div>

          <!-- Bordered box for main paragraph -->
          <div
            class="relative border-r-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl"
          >
            <p>
              Eduardo leads platform development, to transform football data into actionable insights. 
              With AI and software engineering expertise, he is committed to empower teams 
              to enhance performance through continuous technological innovation.
            </p>

            <!-- Partial top border: right half only, fading to transparent -->
            <span
              class="pointer-events-none absolute top-0 right-0 w-2/3 h-[6px] bg-gradient-to-l from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Partial bottom border: right half only, fading to transparent -->
            <span
              class="pointer-events-none absolute bottom-0 right-0 w-2/3 h-[6px] bg-gradient-to-l from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Bottom small label -->
            <div class="mt-4 text-md text-gray-400">
              MSc in Computer Science
            </div>
          </div>
        </div>
      </section>

      <section
        class="flex flex-col md:flex-row mx-auto items-center w-full max-w-5xl py-8 text-gray-100"
      >
        <!-- LEFT SIDE (Text) -->
        <div class="w-full md:w-2/3 md:pr-4">
          <!-- Name label -->
          <div
            class="text-lg font-bold uppercase text-secondary tracking-wider mb-2"
          >
            SAMUEL FERNANDES
          </div>

          <!-- Bordered box for main paragraph -->
          <div
            class="relative border-l-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl"
          >
            <p>
              Samuel combines years of experience in building large-scale distributed systems, AI, 
              and computer vision algorithms with a passion for football and real-time data insights. 
              He is committed to leveraging advanced technologies to optimize performance and secure a strategic advantage in the market.
            </p>

            <!-- Partial top border: left half only, fading to transparent -->
            <span
              class="pointer-events-none absolute top-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Partial bottom border: left half only, fading to transparent -->
            <span
              class="pointer-events-none absolute bottom-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
              aria-hidden="true"
            ></span>

            <!-- Bottom small label -->
            <div class="mt-4 text-md text-gray-400">
              MSc in Computer Science
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE (Image) -->
        <div
          class="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center"
        >
          <!-- Example image; replace with your own. 
           Use object-cover or object-contain as desired. -->
          <img
            src="/src/assets/img/about-samu.png"
            alt="Person's Profile"
            class="rounded-lg shadow-lg max-w-xs max-h-96"
          />
        </div>
      </section>

      <section class="w-full text-gray-100 space-y-8">
        <!-- TOP BLOCK (MISSION) -->
        <div class="relative border-l-4 border-gray-600 p-8">
          <h2 class="text-2xl md:text-5xl font-bold mb-4">OUR MISSION</h2>
          <p class="leading-relaxed md:text-xl md:pr-60">
            We are on a mission to revolutionise football by making top-tier
            performance analysis accessible to every club, regardless of size or
            budget. Through our innovative platform, we aim to empower coaches,
            players, and staff with the insights they need to improve, grow, and
            succeed.
          </p>

          <!-- Partial top border: left half only, fading to transparent -->
          <span
            class="pointer-events-none absolute top-0 left-0 w-1/2 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
            aria-hidden="true"
          ></span>

          <!-- Partial bottom border: left half only, fading to transparent -->
          <span
            class="pointer-events-none absolute bottom-0 left-0 w-1/2 h-[6px] bg-gradient-to-r from-gray-600 to-transparent"
            aria-hidden="true"
          ></span>
        </div>

        <!-- BOTTOM BLOCK (VISION) -->
        <div class="relative border-r-4 border-gray-600 p-8 text-right">
          <h2 class="text-2xl md:text-5xl font-bold mb-4">OUR VISION</h2>
          <p class="leading-relaxed md:text-xl md:pl-60">
            We believe that data-driven decisions shouldn’t be reserved for
            elite teams. Our vision is to empower clubs at every level to
            harness the power of technology, refine their strategies, and
            compete with confidence.
          </p>

          <!-- Partial top border: right half only, fading to transparent -->
          <span
            class="pointer-events-none absolute top-0 right-0 w-1/2 h-[6px] bg-gradient-to-l from-gray-600 to-transparent"
            aria-hidden="true"
          ></span>

          <!-- Partial bottom border: right half only, fading to transparent -->
          <span
            class="pointer-events-none absolute bottom-0 right-0 w-1/2 h-[6px] bg-gradient-to-l from-gray-600 to-transparent"
            aria-hidden="true"
          ></span>
        </div>
      </section>
      <section class="relative flex items-center justify-center mt-20">
        <div class="absolute w-full h-0.5 bg-white"></div>
        <div
          class="w-32 h-32 border-2 border-white rounded-full bg-transparent"
        ></div>
      </section>
      <section class="flex flex-col items-center justify-center mt-20 relative">
        <h2
          class="text-4xl font-bold text-secondary uppercase text-center z-30"
        >
          READY TO ELEVATE YOUR PERFORMANCE?
        </h2>
        <button
          class="bg-gradient-to-r from-[#3533cd] to-[#ff4646] font-bold uppercase rounded-full p-0.5 mt-8 z-30"
        >
          <span
            class="flex py-4 px-24 w-full text-sm text-black bg-white rounded-full p-2"
            @click="$emit('open-modal')"
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
    </div>
  </div>
</template>
