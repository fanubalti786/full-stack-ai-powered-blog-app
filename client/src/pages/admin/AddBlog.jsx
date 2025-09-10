import React, { useState } from 'react'
import { assets } from '../../assets/assets'

export default function AddBlog() {

  const [image,setImage] = useState(false)
  const [title,setTitle] = useState('')
  const [subTitle,setSubTitle] = useState('')
  const [category,setCategory] = useState('Startup')
  const [isPublished,setIsPublished] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  } 

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 overflow-scroll'>

      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded border'>

        <p>Upload thumbnail</p>
        <label htmlFor="image" className='inline-flex'>
          <img src={image? URL.createObjectURL(image):assets.upload_area} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </label>

        <p className='mt-4'>Blog title</p>
        <input type="text" placeholder='Type here' required value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' />


        <p className='mt-4'>Sub title</p>
        <input type="text" placeholder='Type here' required value={subTitle}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' />

      </div>

    </form>
  )
}
