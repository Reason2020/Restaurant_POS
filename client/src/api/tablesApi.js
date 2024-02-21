import axios from 'axios'

const tablesApi = axios.create({
    baseURL: "http://localhost:3001/api/v1"
})

export const getTables = async () => {
    const response = await tablesApi.get("/tables")
    console.log("Response: ", response.data.data);
    return response.data.data
}

export default tablesApi