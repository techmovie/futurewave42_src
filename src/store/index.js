import { createStore } from 'vuex'

import { nexhuman } from "../data/books/nexhuman"

console.log(nexhuman)

export default createStore({
  state: {
    books:
      [
        nexhuman
      ],
  },
  getters: {
    getById: (state) => (id) => {
      return state.books.find(book => book.id === id)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
