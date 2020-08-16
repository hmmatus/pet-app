<template>
  <div>
    <modal ref="modal" @reload="this.getData()" v-show="showModal" @close="showModal = false"></modal>
    <div class="tabs is-large" style="background-color:#f0f0f5">
      <ul>
        <li class="is-active">
          <a>All</a>
        </li>
      </ul>
    </div>
    <div class="container" style="box-sizing:none;background-color:#e0e0eb">
      <h1 class="title">Pets</h1>
      <div class="table-container">
        <table class="table">
          <thead>
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
          </thead>
          <tbody>
            <tr class="header-text" v-for="pet in pets" v-bind:key="pet.id">
              <td class="table-column">{{pet.id}}</td>
              <td class="table-column">{{pet.name}}</td>
              <td class="table-column">{{pet.kind}}</td>
              <td class="table-column" style>
                <div class="pet-color-div" v-bind:style="{'background-color':pet.color}"></div>
              </td>
              <td class="table-column">{{pet.breed}}</td>
              <td class="table-column">{{pet.gender}}</td>
              <td class="table-column">{{pet.age}}</td>
              <td class="table-column">{{this.formatDate(pet.created_at)}}</td>
              <td>
                <div class="actions-container">
                  <button class="options-button" @click="this.openModal(pet)">
                    <img :src="editIcon" />
                  </button>
                  <button class="options-button" @click="this.delete(pet.id)">
                    <img :src="deleteIcon" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import editIcon from "@/assets/file-edit-outline.png";
import deleteIcon from "@/assets/trash-can-outline.png";
import Swal from "sweetalert2";
import { GET_PET_INFO, DELETE_PET_INFO, PUT_PET_INFO } from "@/utils/requests";
import modal from "@/components/Modal.vue";
export default {
  name: "Home",
  components: {
    modal,
  },
  data: () => ({
    editIcon: editIcon,
    deleteIcon: deleteIcon,
    pets: null,
    showModal: false,
    selectedPet: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
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
        Swal.fire("Error!", "Something happened " + error, "error");
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
    openModal(data) {
      //console.log(data);
      this.$refs.modal.setItem(data);
      this.showModal = true;
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
.header-text {
  width: 100%;
  justify-content: space-between;
}
.table-column {
  min-width: 5em;
  margin-right: 15em;
  text-align: center !important;
}
.pet-color-div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: auto;
  margin-top: 0.6em;
}
.actions-container {
  width: 100%;
}
.options-button {
  padding: 0;
  border: none;
  background: none;
  min-width: 2em;
  min-height: 2em;
}
</style>
