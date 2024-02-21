import axios from 'axios'

const tablesApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTables = async () => {
    console.log('Hey we here...')
    const response = await tablesApi.get("/tables")
    return response.data
}

export default tablesApi