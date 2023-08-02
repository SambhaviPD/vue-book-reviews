<script setup>
    import { ref } from 'vue'
    import { useReadBookListStore } from '@/stores/readBookList'
    
    const readBook = ref('')
    const store = useReadBookListStore()

    function addItemAndClear(item) {
        if (item.length === 0) {
            return 
        }
        store.addBook(item)
        readBook.value = ''
    }

</script>

<template>
    <div>
        <form @submit.prevent="addItemAndClear(readBook)">
            <input v-model="readBook" type="text" /><button>Add</button>
        </form>
    </div>
</template>

<style scoped>
    input {
        margin-top: 25px;
        margin-bottom: 15px;
        height: 20px;
        width: 50%;
    }
    button {
        margin-left: 30px;
        background-color: blue;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        font-weight: 800;
        color: white;
        width: 15%
    }
    .alert-div {
        min-height: 25px;
    }
    .alert {
        color: red;
        font-size: 1em;
        font-weight: 600;
    }
</style>