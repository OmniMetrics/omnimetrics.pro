<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gray-800 opacity-50"></div>

    <!-- Modal Content -->
    <div
      class="relative z-10 bg-gray-900 rounded-3xl shadow-lg p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
    >
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 text-white bg-transparent text-xl font-bold hover:text-gray-200 flex items-center justify-center"
        @click="closeModal"
      >
        X
      </button>

      <!-- Modal Header -->
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-white mb-4">
          Interested in OmniMetrics?
        </h2>
        <p class="text-sm text-gray-300">
          If you're curious about joining our platform or want to know more
          about our product, feel free to send us a message.
        </p>
      </div>

      <!-- Form -->
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
          <input
            v-model="name"
            type="text"
            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
          <textarea
            v-model="message"
            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>
      </div>

      <!-- Send Email Button -->
      <button
        class="w-full mt-6 bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 uppercase font-bold"
        @click="sendEmail"
      >
        Send us an email
      </button>

      <!-- Email Address -->
      <span class="block mt-4 text-xs text-gray-300 text-center">
        <span>info</span><span>@</span><span>omnimetrics.pro</span>
      </span>

      <!-- Social Media Section -->
      <div class="mt-6">
        <div class="flex justify-center space-x-6">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/people/OmniMetrics/61567087375388/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="h-6 w-6"
              fill="currentColor"
            >
              <path
                d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"
              ></path>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://pt.linkedin.com/company/omnimetrics-wherefootballmeetsintelligence"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="h-6 w-6"
              fill="currentColor"
            >
              <path
                d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"
              ></path>
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/omnimetrics_ai/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="h-6 w-6"
              fill="currentColor"
            >
              <path
                d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
              ></path>
            </svg>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/OmniMetrics/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 97.707 97.707"
              class="h-6 w-6"
              fill="currentColor"
            >
              <path
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No need to import the Footer component anymore
</script>

<script lang="ts">
export default {
  name: 'Message',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      if (!this.name.trim() || !this.message.trim()) {
        return
      }
      const user = 'info'
      const domain = 'omnimetrics.pro'
      const subject = `Message from ${this.name}`
      const body = this.message
      const mailtoLink = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
    },
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>
