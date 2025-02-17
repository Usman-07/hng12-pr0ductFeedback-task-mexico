import React from 'react'
import bulbIcon from '../assets/bulbIcon.svg'
import pathDown from '../assets/pathDown.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#373F68] rounded-md p-4 text flex space-x-22'>
        <div className='flex space-x-2'> 
            <img src={bulbIcon} alt="bulb-icon" width="24px"/>
            <div className='text-[#FFF] font-semibold mt-3'>6 Suggestions</div>
        </div>
        <div className='flex space-x-2 text-sm mt-3'> 
            <div className='text-[#F2F4FE] font-semibold cursor-pointer hover:font-normal'><span className='font-normal'>Sort by : </span>Most Upvotes</div>
            <img src={pathDown} alt="path-down" width="8px" className='mb-3'/>
        </div>
        <Link to="/new-feedback" className='btn1 ml-auto'>+ Add Feedback </Link>
        
    </div>
    </>
  )
}

export default Navbar