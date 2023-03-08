import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Kc1UVsSkSW-dAQ2a_CUK4YRfhQzwYVzALwLhvPN7weg",
  },
})
