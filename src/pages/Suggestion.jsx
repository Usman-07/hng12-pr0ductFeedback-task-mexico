import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import pathUp from '../assets/pathUp.svg'
import commentIcon from '../assets/commentIcon.svg'
import nodata from '../assets/nodata.svg'
import { Link } from 'react-router-dom'

export const Suggestion = () => {
  return (
    <>
    <div className='grid grid-cols-[1fr_2.8fr] px-20 gap-4 pt-10 '>
        <Sidebar/>
      <div>
        <Navbar />
        <SuggesionList />
      </div>
    </div>
    </>
  )
}

export const SuggesionList = () => {
    const feedbackList = [
        {
            id: 112,
            title: "Add tags for solutions",
            comment: "Easier to search for solutions based on a specific stack.",
            type: "Enhancement",
            commentnum: "112",
            commentcount: "4"
        },
        {
            id: 223,
            title: "Add a dark theme option",
            comment: "It would help people with light sensitivities and who prefer dark mode.",
            type: "Feature",
            commentnum: "99",
            commentcount: "0"
        },
        {
            id: 334,
            title: "Q&A within the challenge hubs",
            comment: "Challenge-specific Q&A would make for easy reference.",
            type: "Feature",
            commentnum: "65",
            commentcount: "1"
        }
    ]

    useEffect(() => {
        if (!localStorage.getItem('feedbackList')) {
          localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
        }
      }, []);
    
      const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
    return (
      <>
      <div className='' >
        {storedFeedback.length > 0 ? (storedFeedback.map((item,index) => (
        <div key={index} className='rounded-lg flex p-8 bg-white space-x-8 mt-6'>
             <div className='tag1Main self-center mb-12'>
                 <img src={pathUp} alt="pathUp" className='ml-2'/>
                 <div className='font-bold'>{item.commentnum}</div>
             </div>
 
             <div className='text-left mb-1'>
                <Link to={`/feedback/${item.id}`} className='textbold'>{item.title}</Link>
                <div className='textnormal'>{item.comment}</div>
                <div className='tag1 flex flex-wrap self-center my-2'>{item.type}</div>
             </div>
 
             <div className='flex ml-auto'>
                 <img src={commentIcon} alt="commentIcon" width="18px" height="16px"/>
                 <div className='textbold mt-10 ml-2'>{item.commentcount}</div>
             </div>
         </div>
       ) )
        ):(
        <>
            <div className='items-center justify-center flex flex-col py-24 rounded-lg bg-white space-y-4 my-6'>
                <img src={nodata} alt="nodata" />
                <div className='textbold mt-6 '>There is no feedback yet.</div>
                <div className='textnormal text-center max-w-md mx-auto'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>

                <Link to="/new-feedback" className='btn1'>+ Add Feedback </Link>
            </div>
        </>
       )
       }
       
      </div>
      </>
    )
  }
