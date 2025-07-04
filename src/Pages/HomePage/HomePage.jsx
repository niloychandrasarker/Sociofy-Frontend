import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MidlePart from "../../Compunenet/MidlePart/MidlePart";
import Reels from "../../Compunenet/Reels/Reels";
import CreateReels from "../../Compunenet/Reels/CreateReels";
import Profile from "../Profile/Profile";
import HomeRight from "../../Compunenet/HomeRight/HomeRight";
import Sidebar from "../../Compunenet/Sidebar/Sidebar";

const HomePage = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Grid container spacing={0} className="min-h-screen">
        {/* Sidebar - Hidden on mobile, visible on tablet+ */}
        <Grid 
          item 
          xs={0} 
          sm={0} 
          md={3} 
          lg={3}
          className="hidden md:block"
        >
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          sm={location.pathname === "/" ? 8 : 12}
          md={location.pathname === "/" ? 6 : 9}
          lg={location.pathname === "/" ? 6 : 9}
          className="flex justify-center px-2 sm:px-4 lg:px-6"
        >
          <div className="w-full max-w-2xl">
            <Routes>
              <Route path="/" element={<MidlePart />} />
              <Route path="reels" element={<Reels />} />
              <Route path="create-reels" element={<CreateReels />} />
              <Route path="profile/:id" element={<Profile />} />
            </Routes>
          </div>
        </Grid>

        {/* Right Sidebar - Responsive display */}
        {location.pathname === "/" && (
          <Grid 
            item 
            xs={0}
            sm={4}
            md={0}
            lg={3}
            className="hidden sm:block md:hidden lg:block"
          >
            <div className="sticky top-0 h-screen overflow-y-auto">
              <HomeRight />
            </div>
          </Grid>
        )}

        {/* Mobile HomeRight - Show as bottom sheet or modal on mobile */}
        {location.pathname === "/" && (
          <div className="sm:hidden">
            {/* This could be implemented as a slide-up panel or modal for mobile */}
            {/* For now, we'll add it to the main content area on mobile */}
          </div>
        )}
      </Grid>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2 px-4">
          <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs mt-1">Explore</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs mt-1">Create</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs mt-1">Messages</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;