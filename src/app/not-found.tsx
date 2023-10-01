import React from 'react'
import Link from 'next/link'

const notFoundPage = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <p className='font-bold text-xl '>404 Not Found</p>
        <p>your Page is invalid</p>
        <Link href={"/"} className='border bg-slate-500 text-white p-4 rounded-md '>Back to Home</Link>
    </div>
  )
}

export default notFoundPage