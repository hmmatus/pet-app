<template>
  <div class="home-container">
    <table>
      <tr class="header-text">
        <th class="table-column">ID</th>
        <th class="table-column">Name</th>
        <th class="table-column">Type</th>
        <th class="table-column">Color</th>
        <th class="table-column">Breed</th>
        <th class="table-column">Gender</th>
        <th class="table-column">Age</th>
        <th class="table-column">Created at</th>
        <th></th>
      </tr>
      <tr class="header-text" v-for="pet in pets" v-bind:key="pet.id">
        <td class="table-column">{{pet.id}}</td>
        <td class="table-column">{{pet.name}}</td>
        <td class="table-column">{{pet.kind}}</td>
        <td class="table-column"><div class="pet-color-div" v-bind:style="{'background-color':pet.color}"></div></td>
        <td class="table-column">{{pet.breed}}</td>
        <td class="table-column">{{pet.gender}}</td>
        <td class="table-column">{{pet.age}}</td>
        <td class="table-column">{{pet.created_at}}</td>
        <td><div class="actions-container">
          <button><img :src="editIcon" /></button>
          <button><img :src="deleteIcon" /></button>
          </div></td>
      </tr>

    </table>
  </div>
</template>

<script>
import axios from 'axios'
import editIcon from '@/assets/file-edit-outline.png'
import deleteIcon from "@/assets/trash-can-outline.png"
export default {
  name: 'Home',
  components: {
  },
  data:()=>({
    editIcon:editIcon,
    deleteIcon:deleteIcon,
    pets:null,
  }),
  mounted(){
    axios.get("http://api-pets.fituapp.com/api/v1/pets",{
      params:{
        token:"e2990f099f38288eb9d8d20762188b84"
      }
    })
    .then(res=>{
      console.log(res.data);
      this.pets = res.data;
      console.log(this.pets)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

tr{
  background-color: white;
}
tr:nth-child(even){
  background-color: #f2f2f2;
}
.home-container{
  display: flex;
  justify-content: center;
}
.header-text{
  width: 100%;
  justify-content: space-between;
}
.table-column{
  min-width: 5em;
  margin-right: 15em;
  text-align: center;
}
.pet-color-div{
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin:auto;
}
.actions-container{
  flex-direction: row;
}

</style>
