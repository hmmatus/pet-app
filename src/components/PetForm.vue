<template>
  <div class="container" style="padding:8px">
    <h1 class="title is-1">Pets</h1>
      <p v-if="errors.length">
    <b>Check the errors below</b>
    <ul>
      <li v-for="error in this.errors" v-bind:key="error.id">{{ error }}</li>
    </ul>
  </p>

    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="name" class="input" type="text" placeholder="Larry" />
          <!-- <p>{{ $v }}</p> -->
        </div>
      </div>
      <label class="label">Kind</label>
      <div class="select">
        <select name="kind" id="kind" v-model="kind">
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="hamster">Hamster</option>
          <option value="bird">Bird</option>
          <option value="fish">Fish</option>
          <option value="turtle">Turtle</option>
          <option value="rabbit">Rabbit</option>
        </select>
        <br />
      </div>
      <div class="field">
        <label class="label">Breed</label>
        <div class="control">
          <input class="input" type="text" v-model="breed" />
        </div>
      </div>
      <div class="field">
        <label class="label">Age</label>
        <div class="control">
          <input type="number" class="input" v-model="age" />
        </div>
      </div>
      <div class="control">
        <label class="label">Gender</label>
        <label class="radio">
          <input type="radio" id="male" name="gender" value="male" v-model="gender" />
          Male
        </label>
        <label class="radio" for="female">
          <input type="radio" id="female" name="gender" value="female" v-model="gender" />
          Female
        </label>
      </div>
      <br />
      <div class="field">
        <label class="label">Color</label>
        <div class="control">
          <input class="input" type="text" placeholder="color" v-model="color" />
        </div>
        <br />
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="button" @click="this.sendData()">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
export default {
  name: "PetForm",
  props: {
    dataReceived: Object,
    formType: String,
  },
  data: () => ({
    id: "",
    name: null,
    kind: null,
    breed: null,
    age: null,
    gender: null,
    color: null,
    errors: [],
  }),
  validations: {
    name: {
      required,
    },
  },
  methods: {
    isColor(strColor) {
      let s = new Option().style;
      s.color = strColor;
      return s.color == strColor;
    },
    setItem(data) {
      //console.log(data.id);
      this.id = data.id;
      this.name = data.name;
      this.kind = data.kind;
      this.breed = data.breed;
      this.age = data.age;
      this.gender = data.gender;
      this.color = data.color;
    },
    validate() {
      if (!this.name) {
        this.errors.push("Name is Obligatory");
      }
      if (!this.kind) {
        this.errors.push("Kind is obligatory");
      }
      if (!this.breed) {
        this.errors.push("breed is obligatory");
      }
      if (!this.age) {
        this.errors.push("age is obligatory");
      }
      if (!this.gender) {
        this.errors.push("gender is obligatory");
      }
      if (!this.color) {
        this.errors.push("color is obligatory");
      } else {
        if (!this.isColor(this.color)) {
          this.errors.push("set a valid color");
        }
      }
      if (!this.errors.length) {
        return true;
      }
    },
    async sendData() {
      this.errors=[];
      if (this.validate()) {
        const data = {
          name: this.name,
          kind: this.kind,
          breed: this.breed,
          age: this.age,
          gender: this.gender,
          color: this.color,
        };
        if (this.formType === "new") {
          this.$emit("send-data", data);
        } else {
          this.$emit("update-data", {
            id: this.id,
            data,
          });
        }
      } else {
        Swal.fire("Error!", "Something happened, check the errors above ", "error");
      }
    },
  },
};
</script>

<style scoped>
p{
  color: red;
}
</style>