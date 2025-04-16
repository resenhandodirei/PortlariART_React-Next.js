"use client";

import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [voted, setVoted] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (voted === "like") {
      setLikes((prev) => prev - 1);
      setVoted(null);
    } else {
      if (voted === "dislike") setDislikes((prev) => prev - 1);
      setLikes((prev) => prev + 1);
      setVoted("like");
    }
  };

  const handleDislike = () => {
    if (voted === "dislike") {
      setDislikes((prev) => prev - 1);
      setVoted(null);
    } else {
      if (voted === "like") setLikes((prev) => prev - 1);
      setDislikes((prev) => prev + 1);
      setVoted("dislike");
    }
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <button
        onClick={handleLike}
        className={`flex items-center gap-1 px-3 py-2 rounded-full border transition ${
          voted === "like" ? "bg-green-100 text-green-700" : "text-gray-700"
        }`}
      >
        <FaThumbsUp />
        {likes}
      </button>

      <button
        onClick={handleDislike}
        className={`flex items-center gap-1 px-3 py-2 rounded-full border transition ${
          voted === "dislike" ? "bg-red-100 text-red-700" : "text-gray-700"
        }`}
      >
        <FaThumbsDown />
        {dislikes}
      </button>
    </div>
  );
};

export default LikeDislike;
