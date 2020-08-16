<template>
  <div class="container">
    <PetForm v-bind:formType="'new'" v-on:send-data="(data)=>this.addPet(data)" />
  </div>
</template>
<script>
import PetForm from "@/components/PetForm";
import { CREATE_PET_INFO } from "@/utils/requests";
import Swal from "sweetalert2";
export default {
  name: "NewPet",
  components: {
    PetForm,
  },
  methods: {
    async addPet(data) {
      console.log(data);
      try {
        const response = await CREATE_PET_INFO(data);
        if (response.status) {
          Swal.fire("Added!", "Your pet has been added.", "success");
          console.log(response.message);
          this.$emit("update-status","add")
          this.$router.push("/");
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        Swal.fire("Error!", "Something happened " + error, "error");
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>