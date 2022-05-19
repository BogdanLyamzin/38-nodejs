import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api/products",
    params: {
        limit: 10
    }
})

export const getProducts = async (page = 1)=> {
    const {data} = await instance.get(`?page=${page}`);
    return data;
}

export const addProduct = async(newProduct)=> {
    const {data} = await instance.post("/", newProduct);
    return data;
}