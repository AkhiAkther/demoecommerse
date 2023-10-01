import Image from 'next/image'

export default function Home() {
  return (
   <main className='max-w-screen-xl mx-auto py-10 flex flex-col items-center justify-center'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, dolore.</p>
    <div>
      <h2 className='text-lg font-bold'>Explore Catagories:</h2>
     <div className='flex flex-col gap-2 mt-4'>
      <a href='https://jsonserver.reactbd.com/phone' target='_blank' className='border bg-slate-500 rounded-md flex  justify-center text-white py-2'>Phone Data </a>
      <a href='https://jsonserver.reactbd.com/phonecase' target='_blank' className='border bg-slate-500 rounded-md flex  justify-center text-white py-2'>PhoneCase Data</a>
      <a href='https://jsonserver.reactbd.com/accessories' target='_blank'  className='border bg-slate-500 rounded-md flex  justify-center text-white py-2'>Accessories Data</a>
      <a href='https://jsonserver.reactbd.com/watch' target='_blank'  className='border bg-slate-500 rounded-md flex  justify-center text-white py-2'>Watches Data</a>
     </div>
    </div>
   </main>
  )
}
