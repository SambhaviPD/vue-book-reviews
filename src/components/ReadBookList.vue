<script setup>
    import { useReadBookListStore } from '../stores/readBookList';
    import { storeToRefs } from 'pinia'

    const store = useReadBookListStore()

    const { readBookList } = storeToRefs(store)

    const { toggleRead, deleteBook } = store

</script>

<template>
    <div v-for="book in readBookList" :key="book.id" class="item">
        <div class="content">
            <span :class=" { completed: book.completed }"> {{  book.item }}</span>
            <span @click.stop="toggleRead(book.id)">&#10004;</span>
            <span @click.stop="deleteBook(book.id)" class="x">&#10060;</span>
        </div>
    </div>
</template>

<style scoped>
    span {
        margin: 0 10px;
        cursor: pointer;
    }
    .item {
        display: flex;
        justify-content: center;
    }
    .content {
        display: flex;
        font-size: 1.5em;
        justify-content: space-between;
        width: 80vw;
        padding: 5px;
    }
    .completed {
        text-decoration: line-through;
    }
</style>