import { defineStore } from 'pinia'

export const useReadBookListStore = defineStore('readBookList', {
    state: () => ({
        readBookList: [],
        id: 0
    }),
    actions: {
        addBook(item) {
            this.readBookList.push({ item, id: this.id++, completed: false })
        },
        deleteBook(itemId) {
            this.readBookList = this.readBookList.filter((object) => {
                return object.id != itemId
            })
        },
        toggleRead(idToFind) {
            const toRead = this.readBookList.find((obj) => obj.id === idToFind)
            if (toRead) {
                toRead.completed = !toRead.completed
            }
        }
    }
})