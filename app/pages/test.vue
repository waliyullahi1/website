<template>
  <div class="w-full max-w-md mx-auto p-5">
    <form @submit.prevent="sendEmail" ref="form" class="space-y-4">

      <div>
        <label class="block font-semibold">Name</label>
        <input type="text" name="user_name" class="w-full border px-3 py-2 rounded"/>
      </div>

      <div>
        <label class="block font-semibold">Email</label>
        <input type="email" name="user_email" class="w-full border px-3 py-2 rounded"/>
      </div>

      <div>
        <label class="block font-semibold">Message</label>
        <textarea name="message" class="w-full border px-3 py-2 rounded"></textarea>
      </div>

      <div>
        <label class="block font-semibold">Upload Image</label>
        <input type="file" @change="handleFileUpload" accept="image/*" />
        <div v-if="logoPreview" class="mt-2">
          <img :src="logoPreview" alt="Preview" class="w-32 h-auto border" />
        </div>
      </div>

      <input type="submit" value="Send" class="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"/>
    </form>
  </div>
</template>


<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm(
      "service_vu5e4wr",
      "template_mgul5qr",
      form.value,
      {
        publicKey: "bhP-AYC0gYX463TjF",
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
        alert("Email sent successfully!");
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Email failed to send.");
      }
    );
};
</script>
