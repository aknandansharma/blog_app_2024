import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const Blogs = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmitComment = (event) => {
    event.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
  };

  // Array of blog data
  const blogsData = [
    {
      id: 1,
      author: "John Doe",
      date: "June 15, 2022 8:00 AM",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZoEgiihJQzU3OcqDw-Nb4905PVoxiWPTcg&s",
      imageAlt: "Blog Image 1",
      text: "Some text at the top of the image",
      likeCount: 10,
      commentCount: 12,
    },
    {
      id: 2,
      author: "Jane Smith",
      date: "July 20, 2022 10:30 AM",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*hbEgvBf99ZyrgZ28iD0BnQ.jpeg",
      imageAlt: "Blog Image 2",
      text: "Some other text for the second blog post",
      likeCount: 15,
      commentCount: 8,
    },
    {
      id: 3,
      author: "Michael Johnson",
      date: "August 5, 2022 3:45 PM",
      imageUrl: "https://www.marxist.com/images/stories/india/2020_general_strike/India_general_strike_women_Image_Redfish.jpg",
      imageAlt: "Blog Image 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likeCount: 20,
      commentCount: 5,
    },
    {
      id: 4,
      author: "Emily Williams",
      date: "September 10, 2022 11:15 AM",
      imageUrl: "https://static.theprint.in/wp-content/uploads/2021/02/1-15.jpg",
      imageAlt: "Blog Image 4",
      text: "Some text for the fourth blog post",
      likeCount: 8,
      commentCount: 10,
    },
    {
      id: 5,
      author: "David Brown",
      date: "October 25, 2022 2:00 PM",
      imageUrl: "https://i.redd.it/xkxxmh02riqa1.jpg",
      imageAlt: "Blog Image 5",
      text: "Content for the fifth blog post goes here.",
      likeCount: 12,
      commentCount: 6,
    },
    {
      id: 6,
      author: "Jessica Lee",
      date: "November 12, 2022 9:45 AM",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrkFIXFlrqlO_ky7SyGE0CovazNuuw0xxbqWi_I5OgjWkh9ITg9SreXj9-Q7gbgoq0_I&usqp=CAU",
      imageAlt: "Blog Image 6",
      text: "Text for the sixth blog post.",
      likeCount: 18,
      commentCount: 3,
    },
    {
      id: 7,
      author: "Chris Taylor",
      date: "December 30, 2022 4:20 PM",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*KJZ-B1RrJjhFWzD1vk6RxA.jpeg",
      imageAlt: "Blog Image 7",
      text: "Some content for the seventh blog post.",
      likeCount: 25,
      commentCount: 9,
    },
    {
      id: 8,
      author: "Samantha Clark",
      date: "January 5, 2023 10:00 AM",
      imageUrl: "https://www.youthinpolitics.in/blog/wp-content/uploads/2022/05/STATESMAN.png",
      imageAlt: "Blog Image 8",
      text: "Content goes here for the eighth blog post.",
      likeCount: 14,
      commentCount: 7,
    },
    {
      id: 9,
      author: "Ryan Martinez",
      date: "February 14, 2023 1:30 PM",
      imageUrl: "https://www.economist.com/sites/default/files/images/print-edition/20140222_ASD000_0.jpg",
      imageAlt: "Blog Image 9",
      text: "Text for the ninth blog post.",
      likeCount: 22,
      commentCount: 11,
    },
    {
      id: 10,
      author: "Amanda White",
      date: "March 20, 2023 8:45 AM",
      imageUrl: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/133739-jwdykatblz-1577670825.jpeg",
      imageAlt: "Blog Image 10",
      text: "Content for the tenth blog post.",
      likeCount: 17,
      commentCount: 4,
    },
  ];
  

  return (
    <>
      {/* Map over blogsData array to render each blog */}
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 mt-12"
        >
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcECgxwuxIHBsvBwBPUz1FMF0RFbaSYPUWFTocrtZbA&s"
              alt="Profile Pic"
              className="h-8 w-8 rounded-full"
            />
            <div>
              <h1 className="text-sm font-semibold">{blog.author}</h1>
              <p className="text-xs text-gray-500">{blog.date}</p>
            </div>
          </div>

          <img
            src={blog.imageUrl}
            alt={blog.imageAlt}
            className="w-full rounded-md"
          />

          <p className="text-sm">{blog.text}</p>

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
            <span className="text-xs text-gray-500">
              {blog.commentCount} comments
            </span>
          </div>

          {showCommentInput && (
            <form onSubmit={handleSubmitComment}>
              <input
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
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
      ))}
    </>
  );
};

export default Blogs;
