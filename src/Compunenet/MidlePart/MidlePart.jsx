import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import StoryCircle from "./StoryCircle";
import Card from "@mui/material/Card";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import HomeRight from "../HomeRight/HomeRight";

const story = [1, 1, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function MidlePart() {
  const handleOpenCreatePostModal = () => {
    console.log("Open Create Post Modal");
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-4 space-y-6 pb-20 lg:pb-6">
      {/* Story Section */}
      <Card className="p-4 sm:p-6 rounded-2xl shadow-card border-0 bg-white/95 backdrop-blur-lg hover-lift">
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          {/* Add Story Button */}
          <div className="flex flex-col items-center min-w-0 flex-shrink-0 cursor-pointer group">
            <div className="relative">
              <Avatar
                sx={{ width: { xs: 60, sm: 70, md: 80 }, height: { xs: 60, sm: 70, md: 80 } }}
                className="ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
              >
                <AddIcon sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }} className="text-blue-600" />
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <AddIcon sx={{ fontSize: "1rem" }} className="text-white" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-700 mt-2 text-center">Add Story</p>
          </div>

          {/* Story Items */}
          {story.map((item, index) => (
            <StoryCircle key={index} />
          ))}
        </div>
      </Card>

      {/* Create Post Section */}
      <Card className="p-4 sm:p-6 rounded-2xl shadow-card border-0 bg-white/95 backdrop-blur-lg hover-lift">
        {/* Post Input */}
        <div className="flex items-center space-x-4 mb-6">
          <Avatar 
            sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}
            className="ring-2 ring-gray-100"
          />
          <input
            readOnly
            onClick={handleOpenCreatePostModal}
            className="flex-1 outline-none rounded-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 hover:bg-gray-100 focus:bg-white focus:border-blue-300 transition-all duration-200 cursor-pointer text-sm sm:text-base"
            placeholder="What's on your mind?"
            type="text"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
          <button
            onClick={handleOpenCreatePostModal}
            className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium shadow-sm transition-all duration-200 hover-scale group flex-1 sm:flex-none"
          >
            <ImageIcon className="text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm sm:text-base">Photo</span>
          </button>
          
          <button
            onClick={handleOpenCreatePostModal}
            className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium shadow-sm transition-all duration-200 hover-scale group flex-1 sm:flex-none"
          >
            <VideocamIcon className="text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm sm:text-base">Video</span>
          </button>
          
          <button
            onClick={handleOpenCreatePostModal}
            className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 font-medium shadow-sm transition-all duration-200 hover-scale group flex-1 sm:flex-none"
          >
            <ArticleIcon className="text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm sm:text-base">Article</span>
          </button>
        </div>
      </Card>

      {/* Posts Section */}
      <div className="space-y-6">
        {posts.map((item, index) => (
          <PostCard key={index} />
        ))}
      </div>

      {/* Mobile HomeRight Section - Only visible on mobile */}
      <div className="block sm:hidden mt-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Discover</h3>
          <HomeRight />
        </div>
      </div>
    </div>
  );
}

export default MidlePart;