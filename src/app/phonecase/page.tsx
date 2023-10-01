import React from 'react'
import Product from '@/components/Product'
const getData = async () =>{
    const res = await fetch("https://jsonserver.reactbd.com/phonecase")

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const phoneCaseData = async () => {
const products = await getData();
return(
    <div>
        <Product products={products}/>
    </div>
)
}

export default phoneCaseData