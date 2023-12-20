<template>
  <div>
    <span class="text-sky-800 font-bold text-2xl">Cek Status</span>
    <div class="flex flex-col gap-3">
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
    </div>
    <button @click="findregis" class="px-4 py-2 mt-1 bg-sky-800 w-fit h-fit text-white font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300">Find</button>

    <!-- Display the found participants -->
    <div v-if="foundregis.length > 0" class="mt-4">
      <h2 class="text-sky-800 font-bold text-lg">Found Participants</h2>
      <ul>
        <li v-for="(regis, index) in foundregis" :key="index">
          {{ regis.name }} - {{ regis.email }}
        </li>
      </ul>
    </div>
    <div v-else class="mt-4">
      <p class="text-sky-800">No participants found.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      regis: [],
      foundregis: [],
    };
  },
  methods: {
    fetchRegis() {
      axios.get('http://localhost:3000/api/regis')
        .then(response => {
          this.regis = response.data;
        })
        .catch(error => {
          console.error('Error fetching regis:', error);
        });
    },
    findregis() {
      // Filter participants based on email and password
      this.foundregis = this.regis.filter(regis => {
        return regis.email === this.email && regis.password === this.password;
      });
    },
  },
  created() {
    this.fetchRegis();
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
