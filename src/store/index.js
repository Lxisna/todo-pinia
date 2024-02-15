import { defineStore } from 'pinia' //用解构的方式引入
import { ref } from 'vue'

const STORE_NAME = 'TodoList'
const STORE_LOCALE_STORAGE_KEY = 'todoList'

const todoList = ref([])

const getDefaultState = () => todoList
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useTodoListStore = defineStore(STORE_NAME, () => {
  const todoList = ref(getCurrentState())

  function updateLocaleStorage() {
    localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(todoList.value))
  }

  function getTodoById(itemId) {
    return todoList.value.find((object) => object.id == itemId)
  }

  function addTodo(title) {
    const id = Math.floor(Math.random() * Date.now())
    // update todoLists with new todo item
    //添加到列表中的每个项目也有一个已设置为false的Completed 属性
    todoList.value.push({ title, id, completed: false })
    updateLocaleStorage()
  }

  function deleteTodo(itemId) {
    todoList.value = todoList.value.filter((object) => object.id != itemId)
    updateLocaleStorage()
  }

  //编写一个操作将completed 切换为true
  function toggleCompleted(idToFind) {
    let updatedList = todoList.value.map((object) => {
      if (object.id == idToFind) {
        object.completed = !object.completed
      }
      return object
    })

    todoList.value = updatedList
    updateLocaleStorage()
  }
  return { todoList, getTodoById, addTodo, deleteTodo, toggleCompleted }
})
