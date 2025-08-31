import React from 'react'
import {useNavigate} from "react-router-dom"
export default function BlogCard({blog}) {
    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/blog/${_id}`)}>
      <img src={image} alt="" />
      <span>{category}</span>
      <div>
        <h5>{title}</h5>
        <p>{description.slice(0,80)}</p>
      </div>
    </div>
  )
}
