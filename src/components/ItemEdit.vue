<script setup>
// import { storeToRefs } from 'pinia'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoListStore } from '../store/index' //要得到store的数据，首先要引入store

const props = defineProps({
  id: String
})
const router = useRouter()
const store = useTodoListStore()
const { deleteTodo } = store
// const { getTodoById } = store

const { id } = toRefs(props)
const todo = store.getTodoById(id.value)

const deleteItem = (id) => {
  deleteTodo(id)
  router.push({ name: 'HomePage' })
}
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <p class="card-text">
        {{ todo }}
      </p>
      <!-- 子组件ItemEdit:接收参数在组件实例对象上,直接调用即可,不可修改 -->
      <button type="button" class="btn btn-danger" @click="deleteItem(todo.id)">Delete</button>
      <router-link :to="{ name: 'HomePage' }"
        ><button type="button" class="btn btn-info">Edit Save</button>
      </router-link>
    </div>
  </div>
</template>
