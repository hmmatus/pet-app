<template>
  <aside class="menu aside-container" style="background-color:#1a75ff">
    <div style="height:5em;"></div>
    <ul class="menu-list">
      <li v-bind:class="{'section-container':selected==='pets'}" style="text-align:center;"><router-link @click="move()" class="text" to="/">Pets</router-link></li>
      <li v-bind:class="{'section-container':selected==='addPet'}" style="text-align:center;"><router-link @click="move()" class="text" to="/petform">Add pet</router-link></li>
    </ul>
  </aside>
</template>
<script>
import indexIcon from "@/assets/dog-side.png";
import addIcon from "@/assets/plus-circle-outline.png";
export default {
  name: "AsideBar",
  data: () => ({
    indexIcon: indexIcon,
    addIcon: addIcon,
    selected:"pets",
  }),
  methods:{
    move(){
      //console.log("Work "+this.selected)
      if(this.selected ==="pets"){
        this.selected = "addPet"
      }
      else if(this.selected === "addPet"){
        this.selected = "pets";
      }
    },
    updateStatus(status){
      if(status === "addPet"){
        this.selected = "pets"
      }
    }
  },
};
</script>
<style scoped>
.aside-container {
  width: 100%;
  height: 100%;
  
}
.section-container{
  border-left-style: solid;
  border-left-color:#4dffdb;
}
.button {
  display: inline-block;
  background-color: transparent;
  border: none;
}
.text{
  color: white;
}
</style>