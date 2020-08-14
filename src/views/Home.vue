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
        <td class="table-column">
          <div class="pet-color-div" v-bind:style="{'background-color':pet.color}"></div>
        </td>
        <td class="table-column">{{pet.breed}}</td>
        <td class="table-column">{{pet.gender}}</td>
        <td class="table-column">{{pet.age}}</td>
        <td class="table-column">{{pet.created_at}}</td>
        <td>
          <div class="actions-container">
            <button @click="this.update(pet.id)">
              <img :src="editIcon" />
            </button>
            <button @click="this.delete(pet.id)">
              <img :src="deleteIcon" />
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import editIcon from "@/assets/file-edit-outline.png";
import deleteIcon from "@/assets/trash-can-outline.png";
import Swal from "sweetalert2";
import { GET_PET_INFO, DELETE_PET_INFO, PUT_PET_INFO } from "@/utils/requests";
export default {
  name: "Home",
  components: {},
  data: () => ({
    editIcon: editIcon,
    deleteIcon: deleteIcon,
    pets: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const result = await GET_PET_INFO();
        if (result.status) {
          this.pets = result.message;
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async delete(id) {
      const handler = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      try {
        if (handler.value) {
          const result = await DELETE_PET_INFO(id);
          console.log("Status " + result.status + " Data " + result.message);
          if (result.status) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            this.getData();
          } else {
            throw new Error(result.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async update(id) {
      let data = {
        name: "Hana",
        kind: "cat",
        breed: "British Shorthair",
        age: 3,
        gender: "male",
        color: "red",
      };
      try {
        const result = await PUT_PET_INFO(id, data);
        console.log("Status " + result.status + " Data " + result.message);
        if (result.status) {
          Swal.fire("Updated!", "Your pet has been updated.", "success");
          this.getData();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
tr {
  background-color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
.home-container {
  display: flex;
  justify-content: center;
}
.header-text {
  width: 100%;
  justify-content: space-between;
}
.table-column {
  min-width: 5em;
  margin-right: 15em;
  text-align: center;
}
.pet-color-div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: auto;
}
.actions-container {
  flex-direction: row;
}
</style>
