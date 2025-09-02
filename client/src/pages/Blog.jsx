import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Moment from "moment"
import { assets, blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'


export default function Blog() {
  const {id} = useParams()
  const [data, setData] = useState(null)
  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id)
    setData(data);
    console.log(data)
  }
 
  useEffect(() => {
    fetchBlogData();
  },[]) 
  return data? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute border-4 -top-50 opacity-50' />
      <Navbar/>

      <div className='border text-center text-gray-700 mt-20'>
        <p className='font-medium text-primary py-4 '>Published on {Moment(data.createdAt).format("MMM Do YYYY")}</p>
        <h1 className='text-2xl font-semibold max-w-2xl mx-auto sm:text-5xl 
        text-gray-900'>{data.title}</h1>
        <h2 className='my-5 max-w-lg mx-auto border truncate'>{data.subTitle}</h2>
        <p className='inline-block border font-medium px-4 py-1 rounded-full text-sm
        mb-7 border-primary/35 bg-primary/6 text-primary'>fanubalti786</p>
      </div>

      <div className='border'> 
      <div className='  max-w-5xl border sm:mx-auto'>
          hello
      </div>
      </div>
    </div>
  ): <div>Loding...</div>
}
