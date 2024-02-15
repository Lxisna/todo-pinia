import { defineStore } from 'pinia' //用解构的方式引入
import { ref } from 'vue'

const STORE_NAME = 'TodoList'
const STORE_LOCALE_STORAGE_KEY = 'todos'

const todos = ref([])
const id = ref(1)

const getDefaultState = () => todos
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useTodoListStore = defineStore(STORE_NAME, () => {
  const todos = ref(getCurrentState())
  function updateLocaleStorage() {
    localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(todos.value))
  }

  function getTodoById(itemId) {
    return todos.value.find((object) => object.id == itemId)
  }

  function addTodo(input_todo) {
    const nextId = id.value++
    // update todoLists with new todo item
    //添加到列表中的每个项目也有一个已设置为false的Completed 属性
    todos.value.push({ input_todo, id: nextId, completed: false })
    updateLocaleStorage()
  }

  function deleteTodo(itemId) {
    todos.value = todos.value.map((object) => object.id != itemId)
    updateLocaleStorage()
  }

  //编写一个操作将completed 切换为true
  function toggleCompleted(idToFind) {
    let updatedList = todos.value.map((object) => {
      if (object.id == idToFind) {
        object.completed = !object.completed
      }
      return object
    })

    this.todoLists = updatedList
  }
  return { getTodoById, addTodo, deleteTodo, toggleCompleted }
})
