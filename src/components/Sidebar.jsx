import React from 'react'
import purpleOval from '../assets/purpleOval.svg'
import blueOval from '../assets/blueOval.svg'
import orangeOval from '../assets/orangeOval.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <>
    <div className='rounded-md space-y-8'>
        <div className='px-6 pt-16 pb-10 text-left' style={{ backgroundImage: `url('/sidebg.svg')`, backgroundSize: 'cover', backgroundPosition: 'center',  borderRadius: '10px'}}>
            <div className='text-[#FFF] font-bold mt-2'>Frontend Mentor</div>
            <div className='text-[#FFF] mt-1'>Feedback Board</div>
        </div>
       
        <div className='p-6 flex flex-wrap gap-4 bg-white rounded-lg'>
            <div className='tag1Active'>All</div>
            <div className='tag1Main'>UI</div>
            <div className='tag1Main'>UX</div>
            <div className='tag1Main'>Enhancement</div>
            <div className='tag1Main'>Bug</div>
            <div className='tag1Main'>Feature</div>
        </div>

        <div className='p-4 rounded-md bg-white'>
            <div className='flex mb-3'>
                <div className='textbold'>Roadmap</div>
                <Link to="/feedback-roadmap" className='text-[#4661E6] font-semibold underline ml-auto cursor-pointer'>View</Link>
            </div>

            <div className='flex mb-3'>
                <img src={orangeOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>Planned</div>
                <div className='textbold ml-auto'>2</div>
            </div>

            <div className='flex mb-3'>
                <img src={purpleOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>In-Progress</div>
                <div className='textbold ml-auto'>3</div>
            </div>

            <div className='flex mb-3'>
                <img src={blueOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>Live</div>
                <div className='textbold ml-auto'>1</div>
            </div>
           
        </div>
        
    </div>
     </>
  )
}

export default Sidebar