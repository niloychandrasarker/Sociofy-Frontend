import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import StoryCircle from "./StoryCircle";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
const story = [1, 1, 1, 1, 1, 1];
const posts = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function MidlePart() {
  const hanbdleOpenCreatePostModal = () => {
    console.log("Open Create Post Modal");
  };
  return (
    <div className="px-20">
      {/* Story Section  Start*/}
      <Card className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "6rem", height: "6rem" }}
            // src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg"
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </Card>
      {/* Story Section  end */}

      {/* Search Section  Start*/}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          />
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={hanbdleOpenCreatePostModal}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium shadow transition"
          >
            <ImageIcon className="!text-blue-500" />
            <span>Media</span>
          </button>
          <button
            onClick={hanbdleOpenCreatePostModal}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium shadow transition"
          >
            <VideocamIcon className="!text-purple-500" />
            <span>Video</span>
          </button>
          <button
            onClick={hanbdleOpenCreatePostModal}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 text-green-700 font-medium shadow transition"
          >
            <ArticleIcon className="!text-green-500" />
            <span>Write Article</span>
          </button>
        </div>
      </Card>
      {/* Search Section  end */}

      {/* Post Section Start */}
      <div className="mt-5 space-y-5">
        {posts.map((item, index) => (
          <PostCard key={index} />
        ))}

      </div>

    </div>
  );
}

export default MidlePart;
