import {useState, useEffect} from "react";

import {getProducts} from "../../shared/services/products"

const ProductList = ()=> {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const fetchProducts = async()=> {
            const data = await getProducts();
            setProducts(data);
        }

        fetchProducts()
    }, []);

    const elements = products.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ProductList;