import React, { useState, useEffect } from "react";
import pathLeft from "../assets/pathLeft.svg";
import pointbg from "../assets/pointbg.svg";

export const EditFeedback = () => {
    const [feedbackTitle, setFeedbackTitle] = useState("");
    const [category, setCategory] = useState("");
    const [feedbackDetail, setFeedbackDetail] = useState("");
    const [status, setStatus] = useState("");

    // Load feedback from localStorage when component mounts
    useEffect(() => {
        const storedFeedback = localStorage.getItem("feedbackData");
        if (storedFeedback) {
            const feedback = JSON.parse(storedFeedback);
            setFeedbackTitle(feedback.title || "");
            setCategory(feedback.category || "");
            setFeedbackDetail(feedback.detail || "");
            setStatus(feedback.status || "");
        }
    }, []);

    // Save updated feedback to localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFeedback = {
            title: feedbackTitle,
            category,
            detail: feedbackDetail,
            status,
        };
        localStorage.setItem("feedbackData", JSON.stringify(updatedFeedback));
        alert("Feedback updated successfully!");
    };

    // Delete feedback from localStorage
    const handleDelete = () => {
        localStorage.removeItem("feedbackData");
        setFeedbackTitle("");
        setCategory("");
        setFeedbackDetail("");
        setStatus("");
        alert("Feedback deleted!");
    };

    // Go back to previous page
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-[#F7F8FD] items-center justify-center flex flex-col min-h-100">
            <div>
                <div className="cursor-pointer flex mt-6 mr-auto" onClick={goBack}>
                    <img src={pathLeft} alt="goBack" width="8px" />
                    <div className="font-semibold text-lg text-[#647196] pl-1">Go Back</div>
                </div>

                <div className="bg-white rounded-md p-8 space-y-4 my-12 relative">
                    <img src={pointbg} alt="addIcon" className="absolute -top-6 left-[13%] transform -translate-x-1/2" />

                    <div className="textboldSub text-left mt-6">Editing Feedback</div>

                    {/* Feedback Title */}
                    <div className="text-left">
                        <div className="textboldSub">Feedback Title</div>
                        <div className="textnormal">Add a short, descriptive headline</div>
                        <input
                            type="text"
                            value={feedbackTitle}
                            onChange={(e) => setFeedbackTitle(e.target.value)}
                            className="bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 focus:ring-1 focus:ring-[#4661E6] outline-none cursor-pointer w-full"
                        />
                    </div>

                    {/* Category */}
                    <div className="text-left">
                        <div className="textboldSub">Category</div>
                        <div className="textnormal">Choose a category for your feedback</div>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 focus:ring-1 focus:ring-[#4661E6] outline-none cursor-pointer w-full"
                        />
                    </div>

                    {/* Update Status */}
                    <div className="text-left">
                        <div className="textboldSub">Update Status</div>
                        <div className="textnormal">Change feedback state</div>
                        <input
                            type="text"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 focus:ring-1 focus:ring-[#4661E6] outline-none cursor-pointer w-full"
                        />
                    </div>

                    {/* Feedback Detail */}
                    <div className="text-left">
                        <div className="textboldSub">Feedback Detail</div>
                        <div className="textnormal">Include any specific comments on what should be improved, added, etc.</div>
                        <input
                            type="text"
                            value={feedbackDetail}
                            onChange={(e) => setFeedbackDetail(e.target.value)}
                            className="bg-[#F7F8FD] mt-1 textnormal rounded-lg p-2 pb-14 focus:ring-1 focus:ring-[#4661E6] outline-none cursor-pointer w-full"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex mt-2">
                        <div>
                            <button type="button" onClick={handleDelete} className="btn4 w-32">Delete</button>
                        </div>
                        <div className="ml-auto justify-end space-x-4 flex">
                            <button className="btn3 w-32" onClick={goBack}>Cancel</button>
                            <button type="submit" onClick={handleSubmit} className="btn1">Save Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
