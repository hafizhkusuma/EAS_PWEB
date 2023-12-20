<template>
  <div>
    <span class="text-sky-800 font-bold text-2xl">Registrasi Form</span>
    <div class="flex flex-col gap-3">
      <div>
        <label class="text-sky-800 font-semibold">Name</label>
        <div class="flex flex-row">
          <input ref="NameInput" v-model="inputname" type="name" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div>
        <label class="text-sky-800 font-semibold">Email</label>
        <div class="flex flex-row">
          <input ref="emailInput" v-model="inputemail" type="email" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div>
        <label class="text-sky-800 font-semibold">Password</label>
        <div class="flex flex-row">
          <input ref="passwordInput" v-model="inputpassword" type="password" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sky-800 font-semibold">Asal Sekolah</label>
        <input v-model="inputasalSekolah" type="asalSekolah" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sky-800 font-semibold">Date</label>
        <input type="date" v-model="inputTanggalPendaftaran" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-pointer" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sky-800 font-semibold">Status</label>
        <select v-model="inputStatus" class="px-3 py-2 bg-slate-100 rounded-md focus:outline-sky-800 cursor-pointer">
          <option v-for="Status in status" :key="Status.name" :value="Status.id" class="cursor-pointer">{{ Status.name }}</option>
        </select>
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
      inputname: "",
      inputemail: "",
      inputpassword: "",
      inputasalSekolah: "",
      inputTanggalPendaftaran: "",
      inputStatus: "",

      status: [],
    };
  },
  methods: {
    RegistrasiForm() {
      if (
        this.inputname === "" ||
        this.inputemail === "" ||
        this.inputpassword === "" ||
        this.inputasalSekolah === "" ||
        this.inputStatus === ""
      ) return;

      const newregis = {
        name: this.inputname,
        email: this.inputemail,
        password: this.inputpassword,
        asalSekolah: this.inputasalSekolah,
        TanggalPendaftaran: this.inputTanggalPendaftaran,
        Status: this.inputStatus,
        status: "1",
      };

      axios
        .post("http://localhost:3000/api/regis", newregis)
        .then((response) => {
          console.log("regis success:", response.data);
          this.$emit("regis-created", response.data);

          this.inputname = "";
          this.inputemail = "";
          this.inputpassword = "";
          this.inputasalSekolah = "";
          this.inputTanggalPendaftaran = "";
          this.inputStatus = "";
          this.$emit("close-form");
        })
        .catch((error) => {
          console.error("Error regis player:", error);
        });
        window.location.reload();
    },
    fetchstatusFromAPI() {
      axios
        .get("http://localhost:3000/api/status")
        .then((response) => {
          this.status = response.data.docs;
        })
        .catch((error) => {
          console.error("Error fetching status from API:", error);
        });
    },
  },
  created() {
    this.fetchstatusFromAPI();
  },
};
</script>

<style scoped>
/* Gaya komponen Anda di sini */
</style>
