<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="container" style="background-color:white;padding:2em;">
        <PetForm ref="PetForm" v-bind:dataReceived="this.dataReceived" v-on:update-data="(data)=>this.updateData(data)" />
      </div>
    </div>
    <button class="modal-close" @click="this.closeModal()"></button>
  </div>
</template>

<script>
import PetForm from "./PetForm";
import { PUT_PET_INFO } from "@/utils/requests";
import Swal from "sweetalert2";
export default {
  name: "Modal",
  components: {
    PetForm,
  },
  props: {
    formData: Object,
  },
  data:()=>({
    dataReceived:null,
  }),
  methods: {
    async updateData(data) {
      try {
        const response = await PUT_PET_INFO(data.id,data.data);
        if (response.status) {
          Swal.fire("Added!", "Your pet has been updated.", "success");
          console.log(response.message);
          this.$emit("reload")
          this.$emit("close")
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        Swal.fire("Error!", "Something happened " + error, "error");
        console.log(error);
      }
    },
    setItem(data){
      console.log("Enter set item modal")
      this.$refs.PetForm.setItem(data);
    },
    closeModal(){
      //console.log(this.formData);
      this.$emit('close')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
