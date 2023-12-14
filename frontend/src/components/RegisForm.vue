<template>
  <div>
    <span class="text-sky-800 font-bold text-2xl">Registrasi Form</span>
    <div class="flex flex-col gap-3">
      <div>
        <label class="text-sky-800 font-semibold">Name</label>
        <div class="flex flex-row">
          <input ref="NameInput" v-model="Name" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div>
        <label class="text-sky-800 font-semibold">Email</label>
        <div class="flex flex-row">
          <input ref="emailInput" v-model="email" type="email" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div>
        <label class="text-sky-800 font-semibold">Password</label>
        <div class="flex flex-row">
          <input ref="passwordInput" v-model="password" type="password" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sky-800 font-semibold">Asal Sekolah</label>
        <input v-model="AsalSekolah" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
      </div>
    </div>
    <button @click="RegistrasiForm" class="px-4 py-2 mt-1 bg-sky-800 w-fit h-fit text-white font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Name: "",
      email: "",
      password: "",
      AsalSekolah: "",
    };
  },
  methods: {
    RegistrasiForm() {
      if (
        this.inputName === "" ||
        this.inputemail === "" ||
        this.inputpassword === "" ||
        this.inputAsalSekolah === ""
      ) return;

      const newPlayer = {
        PlayerName: this.inputName,
        email: this.inputemail,
        password: this.inputpassword,
        AsalSekolah: this.inputAsalSekolah,
      };

      axios
        .post("http://localhost:3000/api/regis", newPlayer)
        .then((response) => {
          console.log("Channel created successfully:", response.data);
          this.$emit("channel-created", response.data);

          this.inputName = "";
          this.inputemail = "";
          this.inputpassword = "";
          this.inputAsalSekolah = "";
        })
        .catch((error) => {
          console.error("Error creating channel:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Gaya komponen Anda di sini */
</style>
