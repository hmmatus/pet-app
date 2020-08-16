<template>
  <div id="app" class="app-container">
    <div class="aside-section">
      <AsideBar @update-status-sidebar="updateStatus" />
    </div>
    <div class="content-section">
      <NavBar />
      <router-view @update-status="updateStatus"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar";
import AsideBar from "./components/layouts/AsideBar";
export default {
  name: "app",
  components: {
    NavBar,
    AsideBar,
  },
  methods:{
    updateStatus(status){
      if(status==="add"){
        this.$emit('update-status-sidebar','addPet')
      }
    }
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #f2f2f2;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.app-container {
  display: flex;
  flex-direction: row;
}
.aside-section {
  width: 20%;
  position: relative;
}
.content-section {
  width: 80%;
  background-color: #e0e0eb;
}
@media screen and (max-width: 320px) {
  .app-container {
    display: flex;
    flex-direction: column;
  }
  .aside-section {
    width: 100%;
  }
  .content-section {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .app-container {
    display: flex;
    flex-direction: column;
  }
  .aside-section {
    width: 100%;
  }
  .content-section {
    width: 100%;
  }
}
</style>
