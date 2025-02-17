import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import pathUp from '../assets/pathUp.svg';
import pathLeft from '../assets/pathLeft.svg';
import face from '../assets/face.svg';
import commentIcon from '../assets/commentIcon.svg';

export const FeedbackComment = () => {
    const { id } = useParams();
    const [feedback, setFeedback] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
        const foundFeedback = storedFeedback.find(item => item.id === parseInt(id));

        if (foundFeedback) {
            setFeedback(foundFeedback);
            
            // Retrieve stored comments
            const storedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
            setComments(storedComments);
        }
    }, [id]);

    const goBack = () => {
        window.history.back();
    };

    const handleAddComment = () => {
        if (!newComment.trim()) return;

        const updatedComments = [...comments, newComment];

        setComments(updatedComments);
        localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        setNewComment('');
    };

    return (
        <div className='bg-[#F7F8FD] items-center justify-center flex flex-col min-h-100'>
            <div>
                <div className='flex'>
                    <div className="cursor-pointer flex mt-6 mr-auto" onClick={goBack}>
                        <img src={pathLeft} alt="goBack" width="8px"/>
                        <div className='font-semibold text-lg text-[#647196] pl-1 pt-2'>Go Back</div>
                    </div> 

                    <div className="cursor-pointer flex mt-6 ml-auto">
                        <Link to="/edit-feedback" className='btn2'>Edit Feedback</Link>
                    </div> 
                </div>

                {feedback && (
                    <div className='rounded-lg flex py-8 px-12 w-[800px] bg-white space-x-8 mt-6'>
                        <div className='tag1Main self-center mb-12'>
                            <img src={pathUp} alt="pathUp" className='ml-2'/>
                            <div className='font-bold'>{feedback.commentnum}</div>
                        </div>

                        <div className='text-left mb-1'>
                            <div className='textbold'>{feedback.title}</div>
                            <div className='textnormal'>{feedback.comment}</div>
                            <div className='tag1 flex flex-wrap self-center max-w-[35%] my-2'>{feedback.type}</div>
                        </div>

                        <div className='flex ml-auto'>
                            <img src={commentIcon} alt="commentIcon" width="18px" height="16px"/>
                            <div className='textbold mt-10 ml-2'>{comments.length}</div>
                        </div>
                    </div>
                )}
            </div>

            {/* Display Comments */}
            <div className='bg-white rounded-md px-6 py-4 mt-8 w-full max-w-2xl'>
                <div className='textboldSub text-left'>{comments.length} Comments</div>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <div key={index} className='rounded-lg flex p-2 bg-white space-x-4 mt-6'>
                        <div>
                            <img src={face} alt="face" className='ml-2'/>
                        </div>

                        <div className='text-left mb-1'>
                            <div className='textbold'>User</div>
                            <div className='textnormal'>{comment}</div>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="text-gray-500 mt-2">No comments yet. Be the first to comment!</div>
                )}
            </div>

            {/* Add Comment Section */}
            <div className='bg-white rounded-md px-6 py-4 mt-8 mb-12 w-full max-w-2xl'>
                <div className='textboldSub mb-2 text-left'>Add Comment</div>
                
                <input 
                    type="text" 
                    className='p-3 w-full rounded-md bg-[#F7F8FD] focus:ring-1 pb-8 focus:ring-[#4661E6] outline-none'
                    placeholder="Type your comment here" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <div className='flex'>
                <button className='btn1 mt-4 ml-auto' onClick={handleAddComment}>Post Comment </button>
                </div>
            </div>
        </div>
    );
};



// import { useState, useEffect } from 'react';
// import { Link, useParams} from 'react-router-dom';
// import pathUp from '../assets/pathUp.svg'
// import pathLeft from '../assets/pathLeft.svg'
// import commentIcon from '../assets/commentIcon.svg'

// export const FeedbackComment = () => {
// const { id } = useParams(); // Get the feedback ID from the URL
// const [feedback, setFeedback] = useState(null);
// const [comments, setComments] = useState([]);


// useEffect(() => {
//     const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
//     const foundFeedback = storedFeedback.find(item => item.id === parseInt(id));


//     if (foundFeedback) {
//         setFeedback(foundFeedback);
  
//         // Retrieve comments if they exist
//         const storedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
//         setComments(storedComments);
//       }
//     }, [id]);

//     const goBack = () => {
//         window.history.back();
//       };

//     return (
//       <>
//        <div className='bg-[#F7F8FD] items-center justify-center flex flex-col min-h-100 '>
//         <div>
//             <div className='flex'>
//                 <div className="cursor-pointer flex mt-6 mr-auto" onClick={goBack}>
//                     <img src={pathLeft} alt="goBack" width="8px"/>
//                     <div className='font-semibold text-lg text-[#647196] pl-1'>Go Back</div>
//                 </div> 

//                 <div className="cursor-pointer flex mt-6 ml-auto">
//                     <Link to="/edit-feedback" className='btn2'>Edit Feedback </Link>
//                 </div> 
//             </div>
            
       
//             {feedback && (
//             <div className='rounded-lg flex p-8 bg-white space-x-8 mt-6'>
//                 <div className='tag1 self-center mb-12'>
//                     <img src={pathUp} alt="pathUp" className='ml-2'/>
//                     <div className='font-bold'>{feedback.commentnum}</div>
//                 </div>

//                 <div className='text-left mb-1'>
//                 <div className='textbold'>{feedback.title}</div>
//                 <div className='textnormal'>{feedback.comment}</div>
//                 <div className='tag1 flex flex-wrap self-center max-w-[35%] my-2'>{feedback.type} </div>
//                 </div>

//                 <div className='flex ml-auto'>
//                     <img src={commentIcon} alt="commentIcon" width="18px" height="16px"/>
//                     <div className='textbold mt-10 ml-2'>{feedback.commentcount}</div>
//                 </div>
//             </div>
//             )}
//         </div>

//         <div className='bg-white rounded-md px-62 py-32 mt-8'>
//             <div className='textboldSub'>0 Comments</div>
//         </div>

//         <div className='bg-white rounded-md px-62 py-32 mt-8'>
//             <input type="text" className='p-12 rounded-md bg-[#F7F8FD] ' />
//             <div className='textboldSub'>Add Comments</div>
//         </div>
//         </div>
//       </>
//     )
//   }
