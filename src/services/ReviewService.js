import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/SambhaviPD/fake-db-for-book-reviews',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getReviews() {
        return apiClient.get('/reviews')
    },
}