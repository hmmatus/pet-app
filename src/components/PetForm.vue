<template>
  <div class="container">
    <h1 class="title is-1">Pets</h1>
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="name" class="input" type="text" placeholder="Larry" />
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
export default {
  name: "PetForm",
  props: {
    dataReceived: Object,
    formType: String,
  },
  data: () => ({
    id:"",
    name: "",
    kind: "",
    breed: "",
    age: 0,
    gender: "",
    color: "",
  }),
  methods: {
    setItem(data) {
      console.log(data.id)
      this.id = data.id;
      this.name = data.name;
      this.kind = data.kind;
      this.breed = data.breed;
      this.age = data.age;
      this.gender = data.gender;
      this.color = data.color;
    },
    async sendData() {
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
        this.$emit("update-data",{
          id:this.id,
          data,
        });
      }
    },
  },
};
</script>

<style scoped>
</style>