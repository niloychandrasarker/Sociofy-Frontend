import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import { red } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const PopularUserCard = () => {
  return (
    <div className="rounded-xl shadow-sm mb-3 bg-white">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add"
            sx={{ ml: 5 }} // Adds margin-left for spacing between title and icon
          >
            <AddIcon />
          </IconButton>
        }
        title="Code with niloy"
        subheader="September 14, 2016"
        titleTypographyProps={{ fontWeight: 600, fontSize: "1rem" }}
        subheaderTypographyProps={{ fontSize: "0.9rem" }}
      />
    </div>
  );
};

export default PopularUserCard;