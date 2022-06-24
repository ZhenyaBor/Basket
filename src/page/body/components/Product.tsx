/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {  ProductInterface } from "./interface";
import { useState,useEffect } from "react";


export const Product = () => {
const [product, setProduct ] = useState([] as ProductInterface[])


useEffect(() => {
fetch('https://dummyjson.com/products?limit=10')
.then(res => res.json())
.then((data)=>{
    setProduct(data.products)
   
});
}, []);
            
  return (<>{product.map((da)=>(  <div>{da.title}</div>)

)}</>);
};
