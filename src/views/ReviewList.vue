<script setup>
import { ref, onMounted } from 'vue'
import ReviewCard from '@/components/ReviewCard.vue'
import ReviewService from '@/services/ReviewService.js'

const reviews = ref(null)

onMounted(() => {
    ReviewService.getReviews()
    .then((response) => {
      reviews.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
  <div class="reviews">
    <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
  </div>
</template>

<style scoped>
.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>