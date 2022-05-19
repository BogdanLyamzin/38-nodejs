import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    params: {
        limit: 10
    }
})

export default instance;

export const login = async (data)=> {
    const {data} = await instance.post("/auth/login", data);
    instance.headers.authorization = `Bearer ${data.token}`
    return data;
}