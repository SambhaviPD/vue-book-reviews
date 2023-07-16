<script setup>

defineProps({
    review: {
        type: Object,
        required: true,
    },
})

</script>

<template>
    <div class="review-card">
        <!-- Display Review data -->
        <h2>{{  review.title  }} by {{  review.author }}</h2>
        <br/>
        <p>Reviewed on {{ review.date }}</p>
        <br/>
        <p> <u>Here's my review: </u>{{ review.review }}</p>
    </div>
</template>

<style scoped>
.review-card {
    margin: 10px;
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39459C;
    margin-bottom: 18px;
}
.review-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2)
}

.review-link {
    text-decoration: none;
    color: #2c3e50;
}
</style>