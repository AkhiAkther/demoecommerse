import { log } from 'console'
import React from 'react'
import Product from '@/components/Product'
const getData= async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phone")

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const phonePage = async () => {
    const products = await getData()
    
    
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
        <Product products={products}/>
        
    </div>
  )
}

export default phonePage