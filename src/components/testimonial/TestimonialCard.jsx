import React from 'react'
import "./testimonial.scss"
const TestimonialCard = ({userName,role,desc}) => {
  return (
      <div className='test'>
          <div className="head">
              <span>{userName}</span>
              <p>{role}</p>
          </div>
      <p className='desc'>{desc }</p>
          
    </div>
  )
}

export default TestimonialCard