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
    <div>
    
      <div className='flex flex-wrap gap-4  border bg-white'>

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
        <div className='mt-6 flex items-center gap-3 m-4 text-gray-600 border'> 
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className='max-w-4xl relative rounded-lg shadow bg-white border'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 border xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4 border'>Blog Title</th>
                <th scope='col' className='px-2 py-4 border max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 border max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4 border'>Actions</th>

              </tr>
            </thead>

            <tbody className='text-left'>
              {dashboardData.recentBlogs.map((blog,index) => {
              return <BlogTableItem key={index} blog={blog} fetchBlogs={dashboardData} index={index+1}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
