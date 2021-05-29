import { createStore } from 'vuex'

import { nexhuman } from "../data/books/nexhuman"
import { blood_buster} from "../data/books/blood_buster"

console.log(nexhuman)

export default createStore({
  state: {
    books:
      [
        nexhuman,
        blood_buster
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
