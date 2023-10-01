import React from 'react'
import Link from 'next/link'

const Header = () => {
  const navigation =[
    {
      _id: 1,
      title:"Home",
      href:"/",
    },
   
    {
      _id: 2,
      title:"Phone",
      href:"/phone",
    },
    {
      _id: 3,
      title:"PhoneCase",
      href:"/phonecase",
    },
    {
      _id: 4,
      title:"Accessorise",
      href:"/accessorise",
    },
    {
      _id: 5,
      title:"Watches",
      href:"/watches"
    }
  ]
  return (
    <div className='w-full h-20 text-white bg-slate-500 sticky top-0 z-20  '>
      <ol className='max-w-screen-xl mx-auto h-full flex items-center justify-center gap-8'>
       { navigation.map((item)=>(
        <Link key={item._id} href={item.href}>
          <li className='font-bold hover:text-slate-700 duration-200'>
            {item.title}
          </li>
        </Link>
       ))}
        
      </ol>  
    </div>
  )
}

export default Header