<script>
import RegisForm from '@/components/RegisForm.vue';
import CekStatus from '@/components/CekStatus.vue';

export default {
  components: {
    RegisForm,
    CekStatus,
  },
  data() {
    return {
      showRegisForm: false,
      showCekStatus: false,
    };
  },
  // Your other HomePage logic
  methods: {
    showRegisFormForm() {
      this.showRegisForm = true;
      this.showCekStatus = false;
    },
    showCekStatusForm() {
      this.showCekStatus = true;
      this.showRegisForm = false;
    },
  },
};
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-full justify justify-center flex flex-col mt-3 px-56">
      <Header />
      <ToDoList />

      <!-- Add buttons to toggle RegisForm and CekStatus components -->
      <div class="flex mt-4">
        <button @click="showRegisFormForm" class="mr-4 px-4 py-2 bg-sky-800 text-white rounded-md hover:bg-sky-900 focus:outline-sky-800 focus:ring focus:border-sky-800">Registrasi</button>
        <button @click="showCekStatusForm" class="px-4 py-2 bg-sky-800 text-white rounded-md hover:bg-sky-900 focus:outline-sky-800 focus:ring focus:border-sky-800">Cek Status</button>
      </div>

      <!-- Show RegisForm component if the flag is set to true -->
      <div v-if="showRegisForm">
        <RegisForm />
      </div>

      <!-- Show CekStatus component if the flag is set to true -->
      <div v-if="showCekStatus">
        <CekStatus />
      </div>
    </div>
  </main>
</template>
