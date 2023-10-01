'use client'
import Image from "next/image";
const Product = ({products} : any) => {
    console.log(products);
    

  return (
    <div className="grid grid-cols-4 gap-10 z-50">
        {products.map((item: any) =>(
            <div 
                key={item._id}
                className="border border-slate-500 rounded-md overflow-hidden">
                <Image 
                src={item?.image}
                alt="product image"
                width={500}
                height={500}
                />
                <div className="p-4 border-t-[1px] border-t-slate-500 gap-2">
                    <p className="font-bold">{item?.title}</p>
                    <p>{item?.description. substring(0,100)}</p>
                    <p>{item?.isNew ? "New products " : ""}</p>
                    <p>Price:${item?.price}</p>
                    <p>Previous-Price:${item?.previousPrice}</p>
                    <p>{item?.catagory}</p>
                    <p>Brand:{item?.brand}</p>
                </div>
            </div>

        ))}
    </div>
  )
}

export default Product