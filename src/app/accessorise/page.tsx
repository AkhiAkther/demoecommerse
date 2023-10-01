import React from 'react'
import Product from '@/components/Product'
const getData = async() =>{
    const res = await fetch("https://jsonserver.reactbd.com/accessories")

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const accessoriesPage =async () => {
    const products =await getData()
  return (
    <div><Product products = {products}/></div>
  )
}

export default accessoriesPage