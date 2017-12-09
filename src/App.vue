<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button @click="handleSubmit()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="person in names" v-bind:key="person['.key']">
          <div v-if="!person.edit">
            <p>{{ person.name }}</p>
            <button @click="handleRemove(person['.key'])">Remove</button>
            <button @click="handleEdit(person['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="person.name" />
            <button @click="handleSave(person)">Save</button>
            <button @click="handleCancel(person['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';

export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    handleSubmit() {
      namesRef.push({ name: this.name, edit: false });
      this.name = '';
    },
    handleRemove(key) {
      namesRef.child(key).remove();
    },
    handleEdit(key) {
      namesRef.child(key).update({ edit: true });
    },
    handleSave(person) {
      const key = person['.key'];
      namesRef.child(key).set({ name: person.name, edit: false });
    },
    handleCancel(key) {
      namesRef.child(key).update({ edit: false });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 0;
  cursor: pointer;
  padding: .2rem .5rem;
}

</style>
