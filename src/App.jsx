import { useState } from 'react'

function App() {
const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-yellow flex items-center justify-center'>
      
      {/* card body */}
      <div className='w-96 rounded-3xl bg-white p-6 font-fig drop-shadow-[8px_8px_0px_rgba(0,0,0)]'>
        <img src="src/assets/images/illustration-article.svg" alt="blog image" className='rounded-xl'/>

        <p className='font-extrabold text-sm bg-yellow inline-block py-1 px-3 rounded-sm mt-6'>Learning</p>

        <p className='my-3 text-gray-950 text-sm'>Published 21 Dec 2023</p>

        <p className='font-extrabold text-2xl my-3 hover:text-yellow hover:cursor-pointer transition-all duration-100 ease-in-out'>HTML & CSS foundations</p>

        <p className='text-gray-500 text-base leading-[1.5]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

        <div className='flex gap-3 mt-6 items-center'>
          <img src="src/assets/images/image-avatar.webp" alt="Greg Hooper avatar" className='h-8' />
          <p className='text-gray-950 font-extrabold text-sm'>Greg Hooper</p>
        </div>
      </div>

    </div>
      
  )
}

export default App
