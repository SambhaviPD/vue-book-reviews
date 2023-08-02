<script setup>
    import ReadBookForm from './ReadBookForm.vue';
    import ReadBookList from './ReadBookList.vue';

</script>

<template>
    <div class="bookread-app">
        <h1>My Book Reading Catalog</h1>
        <br/>
        <ReadBookForm/>
        <ReadBookList/>
    </div>
</template>

<style scoped>
    .bookread-app {
        padding: 5vh;
        min-height: 100vh;
        width: 30vw;
        background-color: #f7f9fc;
    }
</style>