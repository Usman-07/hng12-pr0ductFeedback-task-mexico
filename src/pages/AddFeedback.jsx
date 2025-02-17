import React, {useState} from 'react'
import circlebg from '../assets/circlebg.svg'
import pathLeft from '../assets/pathLeft.svg'

export const AddFeedback = () => {
    const [feedbackTitle, setFeedbackTitle] = useState("");
    const [category, setCategory] = useState("");
    const [feedbackDetail, setFeedbackDetail] = useState("");
  
    const [errors, setErrors] = useState({
        feedbackTitle: "",
        category: "",
        feedbackDetail: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};

        if (!feedbackTitle) newErrors.feedbackTitle = "Feedback title is required";
        if (!category) newErrors.category = "Category is required";
        if (!feedbackDetail) newErrors.feedbackDetail = "Can’t be empty";
    
        setErrors(newErrors);

          if (Object.keys(newErrors).length === 0) {
            // Retrieve existing feedbacks from localStorage
            const existingFeedbacks = JSON.parse(localStorage.getItem('feedbackList')) || [];
    
            // Create new feedback object
            const newFeedback = {
                id: Date.now(), // Unique ID
                title: feedbackTitle,
                comment: feedbackDetail,
                type: category,
                commentnum: "0", // Initially no votes
                commentcount: "0" // Initially no comments
            };
    
            // Update localStorage with new feedback
            localStorage.setItem('feedbackList', JSON.stringify([...existingFeedbacks, newFeedback]));
    
            // Reset form
            setFeedbackTitle("");
            setCategory("");
            setFeedbackDetail("");
    
            // Navigate back to feedback list
            window.history.back();
        }
      };

    const goBack = () => {
        window.history.back();
      };

  return (
    <>
    <div className='bg-[#F7F8FD] items-center justify-center flex  flex-col min-h-100'>
    <div>
        
        <div className="cursor-pointer flex mt-6 mr-auto" onClick={goBack}>
            <img src={pathLeft} alt="goBack" width="8px"/>
            <div className='font-semibold text-lg text-[#647196] pl-1'>Go Back</div>
        </div> 

        <div className='bg-white rounded-md p-8 space-y-4 my-12 relative'>
            <img src={circlebg} alt="addIcon" className="absolute -top-6 left-[13%] transform -translate-x-1/2" />

            <div className='textboldSub text-left mt-6'>Create New Feedback</div>

            <div className='text-left'>
                <div className='textboldSub'>Feedback Title</div>
                <div className='textnormal'>Add a short, descriptive headline</div>

                <input type="text"
                    value={feedbackTitle}
                    onChange={(e) => {
                        setFeedbackTitle(e.target.value);
                        setErrors((prev) => ({ ...prev, feedbackTitle: "" }));
                    }}
                    className={`bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 focus:ring-1 ${errors.feedbackTitle ? "border border-red-500" : "focus:ring-[#4661E6]"} outline-none cursor-pointer w-full`}
                    />
                {errors.feedbackTitle && ( <div className="text-red-500 text-sm">{errors.feedbackTitle}</div>)}

            </div>

            <div className='text-left'>
                <div className='textboldSub'>Category</div>
                <div className='textnormal'>Choose a category for your feedback</div>

                <input type="text"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setErrors((prev) => ({ ...prev, category: "" }));
                    }}
                    className={`bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 focus:ring-1 ${errors.category ? "border border-red-500" : "focus:ring-[#4661E6]"} outline-none cursor-pointer w-full`}
                    />
                {errors.category && ( <div className="text-red-500 text-sm">{errors.category}</div>)}
            </div>

            <div className='text-left'>
                <div className='textboldSub'>Feedback Detail</div>
                <div className='textnormal'>Include any specific comments on what should be improved, added, etc.</div>

                <input type="text"
                    value={feedbackDetail}
                    onChange={(e) => {
                        setFeedbackDetail(e.target.value);
                        setErrors((prev) => ({ ...prev, feedbackDetail: "" }));
                    }}
                    className={`bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 pb-14 focus:ring-1 ${errors.feedbackDetail ? "border border-red-500" : "focus:ring-[#4661E6]"} outline-none cursor-pointer w-full`}
                    />
                {errors.feedbackDetail && ( <div className="text-red-500 text-sm">{errors.feedbackDetail}</div>)}
            </div>

            <div className='ml-auto justify-end space-x-4 flex'>
                <button className='btn3 w-32' onClick={goBack}>Cancel</button>
                <button type="submit" onClick={handleSubmit} className='btn1'>Add Feedback </button>
            </div>
          
        </div>
    </div>
    </div>
    </>
   
  )
}
