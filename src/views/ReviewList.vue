<script>
import { watchEffect } from 'vue'
import ReviewCard from '@/components/ReviewCard.vue'
import ReviewService from '@/services/ReviewService.js'

export default {
  name: 'ReviewList',
  props: ['page'],
  components: {
    ReviewCard
  },
  data() {
    return {
      reviews: null,
      totalReviews: 0
    }
  },
  created() {
    watchEffect(() => {
      this.reviews = null
      ReviewService.getReviews(2, this.page)
        .then(response => {
          this.reviews = response.data
          this.totalReviews = response.headers['x-total-count']
        })
        .catch(error => {
          console.log('There was an error:', error)
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalReviews / 2)
      return this.page < totalPages
    }
  }
}
</script>

<template>
  <div class="reviews">
    <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'ReviewList', query: { page: page - 1}}"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link>
      <router-link
        id="page-next"
        :to="{ name: 'ReviewList', query: { page: page + 1}}"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link>

    </div>
  </div>
</template>

<style scoped>
.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>