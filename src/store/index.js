// 1.定义状态容器和数据（state）
// 2.修改容器中的state（状态、数据）
// 3.仓库中的action的使用

import { defineStore } from 'pinia' //用解构的方式引入

// 用defineStore来定义仓库，然后倒出自己取名为 useCounterStore 的仓库，传两个参数，第一个字符串就相当于给这个仓库一个ID,
//第二个参数 {} 就相当于这个store的配置项
export const persistTodoListStore = () => {
  useTodoListStore().$subscribe(
    (_, state) => {
      // persist the whole state to the local storage whenever it changes
      localStorage.setItem('TodoList', JSON.stringify(state))
    },
    { detached: true }
  )
}

export const useTodoListStore = defineStore('TodoList', {
  state: () => {
    const json = localStorage.getItem('TodoList')

    return json
      ? JSON.parse(json)
      : {
          todoLists: [],
          id: 0
        }
  },

  getters: {
    getTodoById(itemId) {
      return this.todoLists.find((object) => object.id == itemId)
    }
  },

  actions: {
    addTodo(item) {
      // update id
      const nextId = this.id++
      console.log(nextId)
      console.log(this.todoLists)

      // update todoLists with new todo item
      //添加到列表中的每个项目也有一个已设置为false的Completed 属性
      this.todoLists.push({ item: item, id: nextId, completed: false })
    },

    deleteTodo(itemId) {
      // this.todoLists = this.todoLists.filter((object) => object.id != itemId)
      this.todoLists = this.todoLists.map((object) => object.id != itemId)
    },

    //编写一个操作将completed 切换为true
    toggleCompleted(itemId) {
      let updatedList = this.todoLists.map((object) => {
        if (object.id == itemId) {
          object.completed = !object.completed
        }

        return object
      })

      this.todoLists = updatedList
    }
  }
})
