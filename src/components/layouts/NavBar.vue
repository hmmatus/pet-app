<template>
    <div class="container">
        <div class="header-container">
            <h2>Admin</h2>
            <button class="navbar-button">Fitu</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"PetForm",
    data:()=>({
    })
    
}
</script>

<style scoped>
.container{
    display: flex;
    flex: 1;
    flex-direction: row;
    margin-bottom:1em;
}
.header-container{
    width: 100%;
    height: 5em;
    background-color: white;
}
.aside-container{
    height: 100%;
    width: 10em;
}
.admin-section{
    margin-right: 4em;
}
.navbar-button{
    width: 4em;
    height: 2em;
    border-radius: 8px;
    background-color:  #4dffdb;
}
</style>