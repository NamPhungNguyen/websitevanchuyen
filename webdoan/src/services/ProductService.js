import axios from 'axios'

export const getAllProduct = async () => {
    const res = await axios.get("https://localhost:7156/api/Driver/OrdersList")
    return res.data
}