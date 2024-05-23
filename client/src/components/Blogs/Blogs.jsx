import React, { useState } from "react"
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";



const Blogs = () => {

    const [likeCount, setLikeCount] = useState(0)
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [comment, setComment] = useState("")
  
    const handleSubmitComment = event => {
      event.preventDefault()
      console.log("Comment submitted:", comment)
      setComment("")
    }

    
  return (
    <>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 mt-10">
      <div className="flex items-center space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcECgxwuxIHBsvBwBPUz1FMF0RFbaSYPUWFTocrtZbA&s"
          alt="Profile Pic"
          className="h-8 w-8 rounded-full"
        />
        <div>
          <h1 className="text-sm font-semibold">John Doe</h1>
          <p className="text-xs text-gray-500">June 15, 2022 8:00 AM</p>
        </div>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZoEgiihJQzU3OcqDw-Nb4905PVoxiWPTcg&s"
        alt="Blog Image"
        className="w-full rounded-md"
      />

      <p className="text-sm">Some text at the top of the image</p>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setLikeCount(likeCount + 1)}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <AiFillLike size={18} />
            <span>{likeCount}</span>
          </button>
          <button
            onClick={() => setShowCommentInput(!showCommentInput)}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaComment size={18} />
            <span>Comment</span>
          </button>
        </div>
        <span className="text-xs text-gray-500">2 comments</span>
      </div>

      {showCommentInput && (
        <form onSubmit={handleSubmitComment}>
          <input
            type="text"
            value={comment}
            onChange={event => setComment(event.target.value)}
            placeholder="Write a comment..."
            className="rounded-md border border-gray-300 w-full px-3 py-2 mt-4 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md mt-2 hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      )}
    </div>


    </>
  )
}

export default Blogs