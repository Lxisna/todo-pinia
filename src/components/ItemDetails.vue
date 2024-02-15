<script>
import { useTodoListStore } from '../store' //要得到store的数据，首先要引入store
import { storeToRefs } from 'pinia'
// import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useTodoListStore()

    // storeToRefs让todoList保持反应性:
    const { todoLists } = storeToRefs(store)

    //需要将toggleCompleted带入组件中。由于它是一个action而不是反应式state属性，因此不将 storeToRefs 用于 toggleCompleted
    const { toggleCompleted } = store

    // const router = useRouter()
    // function goToEdit(id) {
    //   router.push(`/itemedit/${id}`)
    // }
    return { todoLists, toggleCompleted }
  }
}
</script>

<template>
  <div v-for="todo in todoLists" :key="todo.id">
    <!-- checking each item off when it is completed -->
    <span @click="toggleCompleted(todo.id)">
      <i class="fa-solid fa-check"></i>
    </span>
    <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
    <!-- router.push -->
    <!-- <button @click="goToEdit(todo.id)">Edit</button> -->
    <button v-if="todo.id != null && todo.id != 'undefined'">
      <router-link :to="{ name: 'EditPage', params: { id: todo.id } }">Edit</router-link>
    </button>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
