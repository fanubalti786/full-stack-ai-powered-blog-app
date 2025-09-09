import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments:0,
    drafts:0,
    recentBlogs:[]
  })
  console.log(dashboardData.recentBlogs)

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data)
  }

  useEffect(() => {
    fetchDashboardData()
  },[])

  
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
    
      <div className='flex flex-wrap gap-4 bg-white overflow-y-auto scrollbar-hide '>

        <div className='flex items-center p-4 gap-4  bg-white w-58 rounded shadow-lg
        cursor-pointer hover:scale-105 transition-all '>
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>

        <div className='flex items-center p-4 gap-4  bg-white w-58 rounded shadow-lg
        cursor-pointer hover:scale-105 transition-all '>
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>


        <div className='flex items-center p-4 gap-4  bg-white w-58 rounded shadow-lg
        cursor-pointer hover:scale-105 transition-all '>
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
            <p className='text-gray-400 font-light'>drafts</p>
          </div>
        </div>
        
      </div>

      <div className=''>
        <div className='mt-6 flex items-center gap-3 m-4 text-gray-600'> 
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className='max-w-4xl relative rounded-lg shadow b'>
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-xs text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Blog Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>

              </tr>
            </thead>

            <tbody className=''>
              {dashboardData.recentBlogs.map((blog,index) => {
              return <BlogTableItem key={index} blog={blog} fetchBlogs={fetchDashboardData} index={index+1}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
