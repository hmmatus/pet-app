<template>
    <div class="container">
        <h1>Pets</h1>
    </div>
</template>

<script>
export default {
    name:"PetForm",
    data:()=>({
        name:"",
        kind:"",
        breed:"",
        age:0,
        gender:"",
        color:"",
    }),
    methods:{
        async sendData(){
            try {
                console.log("Hi")
            } catch (error) {
                console.log("Error")
            }
        },
    }
}
</script>

<style scoped>
.container{
    flex: 1;
}
</style>