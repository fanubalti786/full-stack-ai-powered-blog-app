import React, { useState } from 'react'
import { assets } from '../../assets/assets'

export default function AddBlog() {

  const [image,setImage] = useState(false)
  const [title,setTitle] = useState('')
  const [subTitle,setSubTitle] = useState('')
  const [category,setCategory] = useState('Startup')

  return (
    <form className='flex-1 bg-blue-50/50 text-gray-600 overflow-scroll'>

      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>

        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={assets.upload_area} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input type="text" id="image" hidden required />
        </label>

      </div>

    </form>
  )
}
