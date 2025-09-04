import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
export default function Sidebar() {
  return (
    <div className='border-r border-gray-200 flex flex-col min-h-full pt-6'>
      <NavLink end={true} to="/admin" className={({isActive}) => `flex items-center
      gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && `bg-primary/10 
      border-r-4 border-primary`}`}>
        <img src={assets.home_icon} alt="" className='w-5 min-w-4' />
        <p>Dashborad</p>
      </NavLink>

      <NavLink to="/admin/addBlog" className={({isActive}) => `flex items-center
      gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && `bg-primary/10 
      border-r-4 border-primary`}`}>
        <img src={assets.add_icon} alt="" className='w-5 min-w-4' />
        <p>Add blogs</p>
      </NavLink>

      <NavLink to="/admin/listBlog" className={({isActive}) => `flex items-center
      gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && `bg-primary/10 
      border-r-4 border-primary`}`}>
        <img src={assets.list_icon} alt="" className='w-5 min-w-4' />
        <p>Blog lists</p>
      </NavLink>

      <NavLink to="/admin/comments" className={({isActive}) => `flex items-center
      gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && `bg-primary/10 
      border-r-4 border-primary`}`}>
        <img src={assets.comment_icon} alt="" className='w-5 min-w-4' />
        <p>Comments</p>
      </NavLink>
    </div>
  )
}
