<template>
  <!-- <div class="container">
    <div style="height:5em;"></div>
    <button class="button">
      <img :src="indexIcon" /><router-link to="/">Pets</router-link>
    </button>
    <button class="button">
      <img :src="addIcon" /><router-link to="/petform">Add pet</router-link>
    </button>
  </div>-->
  <aside class="menu aside-container" style="background-color:#1a75ff">
    <div style="height:5em;"></div>
    <ul class="menu-list">
      <li><router-link class="text" to="/">Pets</router-link></li>
      <li><router-link class="text" to="/petform">Add pet</router-link></li>
    </ul>
  </aside>
</template>
<script>
import indexIcon from "@/assets/dog-side.png";
import addIcon from "@/assets/plus-circle-outline.png";
export default {
  name: "sideBar",
  data: () => ({
    indexIcon: indexIcon,
    addIcon: addIcon,
  }),
};
</script>
<style scoped>
.aside-container {
  width: 20%;
  height: 100%;
  position:absolute;
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