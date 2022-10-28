import React from "react";
import { useSelector } from "react-redux";

function Products(){
    const products=useSelector((state)=>state.products.items);
    console.log(products);
}

export default Products;
