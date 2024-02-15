<script setup>
import { useTodoListStore } from '../store/index' //要得到store的数据，首先要引入store
import { ref } from 'vue'

const store = useTodoListStore()
const input_title = ref('')
const AddItemAndClear = () => {
  if (input_title.value.length === 0) {
    return
  }
  store.addTodo(input_title.value)
  input_title.value = ''
}
</script>

<template>
  <form @submit.prevent="AddItemAndClear">
    <div>
      <button type="submit">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <!-- 输入有一个 v-model="addItem"，我将连接到script中的'引用ref',
      以使此属性ref具有反应性，以便当用户在输入中键入项目时它会更新： -->
    <input type="text" v-model="input_title" placeholder="Add an item" />
  </form>
</template>

<style>
form {
  display: flex;
  margin-top: 5rem;
  padding-bottom: 5rem;
}
</style>
