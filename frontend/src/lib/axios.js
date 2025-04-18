import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://talk-ihmb.onrender.com/api",
    withCredentials: true,
})
