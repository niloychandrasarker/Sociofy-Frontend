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
    <div className="px-10  bg-gray-100 min-h-screen">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<MidlePart />} />
            <Route path="reels" element={<Reels />} />
            <Route path="create-reels" element={<CreateReels />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        <Grid item lg={3} className="relative">
          <div className="sticky top-0 w-full">
            <HomeRight/>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
