import React from 'react'
import purpleOval from '../assets/purpleOval.svg'
import blueOval from '../assets/blueOval.svg'
import orangeOval from '../assets/orangeOval.svg'
import goBackIcon from '../assets/goBackIcon.svg'
import { Link } from 'react-router-dom'

export const Roadmap = () => {
    return (
      <>
      <div className='px-20 pt-10 '>
        <div>
          <RoadmapNav />
          <RoadmapList />
        </div>
      </div>
      </>
    )
  }

export const RoadmapList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

        {/* Planned */}
        <div className='mt-6'>
        
        <div>
            <div className='textboldSub text-left'>Planned (2)</div>
            <div className='textnormal text-left'>Ideas prioritized for research</div>
        </div>

        <div className='rounded-md flex flex-col bg-white rounded-md mt-8 mb-3'>
            <div className='p-1 rounded bg-[#F49F85]'></div>

            <div className='flex mb-3 p-6'>
                <img src={orangeOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>Planned</div>
            </div>
        
            <div className='textbold text-left pl-6'>More comprehensive reports</div>
            <div className='textnormal text-left px-6 pb-3'>It would be great to see a more detailed breakdown of solutions.</div>

    
            <div className='tag1 flex flex-wrap max-w-[25%] ml-6 my-2'>Feature</div>

        </div>
        </div>
        

        {/* In progress */}
        <div className='mt-6'>

        <div>
            <div className='textboldSub text-left'>In-Progress (3)</div>
            <div className='textnormal text-left'>Currently being developed</div>
        </div>

        <div className='rounded-md flex flex-col bg-white rounded-md mt-8 mb-3'>
            <div className='p-1 rounded bg-[#AD1FEA]'></div>

            <div className='flex mb-3 p-6'>
                <img src={purpleOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>In Progress</div>
            </div>
        
            <div className='textbold text-left pl-6'>More comprehensive reports</div>
            <div className='textnormal text-left px-6 pb-3'>It would be great to see a more detailed breakdown of solutions.</div>

            <div className='tag1 flex flex-wrap max-w-[25%] ml-6 my-2'>Feature</div>
        </div>
        </div>
       

        {/* Live */}
        <div className='mt-6'>

        <div>
            <div className='textboldSub text-left'>Live (1)</div>
            <div className='textnormal text-left'>Released features</div>
        </div>

       <div className='rounded-md flex flex-col bg-white rounded-md mt-8 mb-3'>
            <div className='p-1 rounded bg-[#62BCFA]'></div>

            <div className='flex mb-3 p-6'>
                <img src={blueOval} alt="bulletIcon" width="8px"/>
                <div className='ml-1 text-[#647196]'>Live</div>
            </div>
        
            <div className='textbold text-left pl-6'>Add micro-interactions</div>
            <div className='textnormal text-left px-6 pb-3'>Small animations at specific points can add delight.</div>

            <div className='tag1 flex flex-wrap max-w-[25%] ml-6 my-2'>Enhancement</div>
        </div>
       </div>
    </div>
  )
}

export const RoadmapNav = () => {

    const goBack = () => {
        window.history.back();
      };

    return (
        <>
        <div className='bg-[#373F68] rounded-md p-3 text flex space-x-22 items-center'>
        <div className='flex flex-col'>
            <div className="cursor-pointer flex mt-2" onClick={goBack}>
            <img src={goBackIcon} alt="goBack" width="8px" />
            <div className='font-semibold text-normal text-[#fff] pl-1 hover:underline'>Go Back</div>
            </div>

            <div className='text-[#FFF] font-bold text-lg mt-2'>Roadmap</div>
        </div>

        <Link to="/new-feedback" className='btn1 ml-auto self-center'>+ Add Feedback</Link>
        </div>
        </>
    )
  }
