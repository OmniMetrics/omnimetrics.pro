<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div class="relative z-10 bg-primary rounded shadow-lg p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
                class="absolute top-2 right-3 text-white bg-transparent text-xl font-bold hover:text-gray-200 flex items-center justify-center"
                @click="closeModal"
            >
                X
            </button>
            <div class="mb-6">
                <h2 class="text-xl font-bold mb-4">Interested in Joining or Learning More?</h2>
                <p class="text-sm text-white">
                    If you're curious about joining our platform or want to know more about our product, feel free to send us a message.
                </p>
            </div>
            <label class="block mb-2">Your Name</label>
            <input
                v-model="name"
                type="text"
                class="w-full mb-4 border border-gray-300 rounded px-2 py-1 text-gray-900"
            />
            <label class="block mb-2">Your Message</label>
            <textarea
                v-model="message"
                class="w-full mb-4 border border-gray-300 rounded px-2 py-1 text-gray-900"
            ></textarea>
            <button
                class="block mx-auto bg-gradient-to-r from-gray-900 to-[#2a28a3] text-white px-20 py-4 rounded-full hover:bg-indigo-700 uppercase font-bold border border-white"
                @click="sendEmail"
            >
                Send us an email
            </button>
            <span class="block mx-auto mt-4 text-xs text-white text-center">
                <span>info</span><span>@</span><span>omnimetrics.pro</span>
            </span>
            <span class="block mx-auto mt-4 text-xs text-white text-center">
                Or Contact Us on Social Media:
            </span>
            <Footer class="mt-4"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
</script>

<script lang="ts">
export default {
    name: 'Message',
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            name: '',
            message: ''
        };
    },
    methods: {
        sendEmail() {
            if (!this.name.trim() || !this.message.trim()) {
                return;
            }
            const user = 'info';
            const domain = 'omnimetrics.pro';
            const subject = `Message from ${this.name}`;
            const body = this.message;
            const mailtoLink = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        },
        closeModal() {
            this.$emit('close')
        }
    }
};
</script>
