<script setup lang="ts">
// No need for refs or scroll handling now
</script>

<template>
  <div class="relative w-full min-h-screen bg-gray-900 text-white">
    <div class="relative z-10 w-full min-h-screen">
      <!-- Header Section -->
      <section class="w-full text-gray-100 py-20 px-4 bg-gray-900">
        <h1 class="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
          The OmniMetrics Team
        </h1>
        <p class="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up">
          OmniMetrics is founded on the synergy of multiple professionals whose
          complementary expertise drives the company's vision and operations.
        </p>
      </section>

      <!-- Mission and Vision Section -->
      <section class="w-full py-8 px-4">
        <div class="flex flex-col md:flex-row mx-auto w-full max-w-5xl gap-8">
          <!-- Mission -->
          <div class="w-full md:w-1/2">
            <div class="relative border-l-4 border-gray-600 p-6 animate-fade-in-left">
              <h2 class="text-2xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p class="leading-relaxed md:text-lg">
                We aim to revolutionize football by making top-tier performance 
                analysis accessible to all clubs, regardless of size or budget. 
                Our goal is to empower coaches, players, and staff with 
                the insights needed to improve, grow, and succeed.
              </p>
              <span class="pointer-events-none absolute top-0 left-0 w-1/2 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
              <span class="pointer-events-none absolute bottom-0 left-0 w-1/2 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
            </div>
          </div>

          <!-- Vision -->
          <div class="w-full md:w-1/2">
            <div class="relative border-r-4 border-gray-600 p-6 text-right animate-fade-in-right">
              <h2 class="text-2xl font-bold mb-4 text-secondary">Our Vision</h2>
              <p class="leading-relaxed md:text-lg">
                We believe that data-driven decisions shouldn't be reserved for
                elite teams. Our vision is to empower clubs at every level to
                harness the power of technology, refine their strategies, and
                compete with confidence.
              </p>
              <span class="pointer-events-none absolute top-0 right-0 w-1/2 h-[6px] bg-gradient-to-l from-gray-600 to-transparent" aria-hidden="true"></span>
              <span class="pointer-events-none absolute bottom-0 right-0 w-1/2 h-[6px] bg-gradient-to-l from-gray-600 to-transparent" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="w-full py-8 px-4">
        <!-- Pedro Brito -->
        <div class="flex flex-col md:flex-row mx-auto items-center w-full max-w-5xl py-8">
          <div class="w-full md:w-2/3 md:pr-8">
            <h2 class="text-2xl font-bold text-secondary tracking-wider mb-2 animate-fade-in-left">
              Pedro Brito
            </h2>
            <div class="relative border-l-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl animate-fade-in-left">
              <p>
                Pedro brings years of federated football experience from the UK and Portugal, 
                offering deep tactical and strategic expertise. With a BSc in Football Studies, 
                he empowers clubs at all levels with insights to optimize performance and gain a competitive edge.
              </p>
              <span class="pointer-events-none absolute top-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
              <span class="pointer-events-none absolute bottom-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
              <div class="mt-4 text-md text-gray-400">
                BSc in Football Studies
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4 flex justify-center md:justify-end animate-fade-in-right">
            <img
              src="/src/assets/img/about-pedro-b.png"
              alt="Pedro Brito"
              class="rounded-lg shadow-lg max-w-xs"
            />
          </div>
        </div>

        <!-- Eduardo Brito -->
        <div class="flex flex-col-reverse md:flex-row mx-auto items-start w-full max-w-5xl py-8">
          <div class="w-full md:w-1/3 mt-6 md:mt-0 md:pl-4 flex justify-center md:justify-start animate-fade-in-left">
            <img
              src="/src/assets/img/about-eduardo.png"
              alt="Eduardo Brito"
              class="rounded-lg shadow-lg max-w-xs"
            />
          </div>
          <div class="w-full md:w-2/3 md:pl-8 text-right">
            <h2 class="text-2xl font-bold text-secondary tracking-wider mb-2 animate-fade-in-right">
              Eduardo Brito
            </h2>
            <div class="relative border-r-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl animate-fade-in-right">
              <p>
                Eduardo leads platform development, transforming football data into actionable insights. 
                With his AI and software engineering expertise, he is committed to empowering teams 
                to enhance performance through continuous technological innovation.
              </p>
              <span class="pointer-events-none absolute top-0 right-0 w-2/3 h-[6px] bg-gradient-to-l from-gray-600 to-transparent" aria-hidden="true"></span>
              <span class="pointer-events-none absolute bottom-0 right-0 w-2/3 h-[6px] bg-gradient-to-l from-gray-600 to-transparent" aria-hidden="true"></span>
              <div class="mt-4 text-md text-gray-400">
                MSc in Computer Science
              </div>
            </div>
          </div>
        </div>

        <!-- Samuel Fernandes -->
        <div class="flex flex-col md:flex-row mx-auto items-center w-full max-w-5xl py-8">
          <div class="w-full md:w-2/3 md:pr-4">
            <h2 class="text-2xl font-bold text-secondary tracking-wider mb-2 animate-fade-in-left">
              Samuel Fernandes
            </h2>
            <div class="relative border-l-4 border-gray-600 p-6 text-gray-200 leading-relaxed md:text-xl animate-fade-in-left">
              <p>
                Samuel combines years of experience in building large-scale distributed systems, AI, 
                and computer vision algorithms with a passion for football and real-time data insights. 
                He is dedicated to leveraging advanced technologies to optimize performance and secure a strategic advantage in the market.
              </p>
              <span class="pointer-events-none absolute top-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
              <span class="pointer-events-none absolute bottom-0 left-0 w-2/3 h-[6px] bg-gradient-to-r from-gray-600 to-transparent" aria-hidden="true"></span>
              <div class="mt-4 text-md text-gray-400">
                MSc in Computer Science
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center animate-fade-in-right">
            <img
              src="/src/assets/img/about-samu.png"
              alt="Samuel Fernandes"
              class="rounded-lg shadow-lg max-w-xs max-h-96"
            />
          </div>
        </div>
      </section>
    </div>
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
</style>
