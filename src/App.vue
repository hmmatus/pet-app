<template>
  <div id="app">
    <div class="aside-section">
      <AsideBar/>
    </div>
    <div class="content-section">
      <NavBar />
      <router-view />
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
    AsideBar
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body{
  width: 100%;
  height:100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
.aside-section{
  width: 20%;
}
.content-section{
  width: 80%;
}
</style>
