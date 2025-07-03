import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import React from "react";
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const PostCard = () => {
  return (
    <Card
      sx={{
        borderRadius: 2, // ✅ Makes the entire card rounded (theme spacing units: 4 = 32px)
        overflow: "hidden", // ✅ Ensures media (image) also gets rounded corners
      }}
      className="rounded-2xl border border-gray-200 shadow-lg mb-5"
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              width: 56, // Increased size (default is 40)
              height: 56, // Increased size (default is 40)
            }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Code With Niloy"
        subheader="@CodeWithNiloy"
        titleTypographyProps={{ fontSize: "1.25rem", fontWeight: 600 }} // Bigger and bold
        subheaderTypographyProps={{ fontSize: "1rem" }} // Bigger subheader
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", whiteSpace: "pre-line",fontSize: "1.1rem", }}
        >
          {`This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests.
            Add 1 cup of frozen peas along with the mussels,
            if you like.`}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2024/12/18/01/27/lightning-9274136_640.jpg"
        alt="Paella dish"
      />
      <CardActions className="flex justify-between" disableSpacing >
      <div>
        <IconButton>
            {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </IconButton>
        <IconButton>
            {<ShareIcon/>}
        </IconButton>
        <IconButton>
            {<CommentIcon/>}
        </IconButton>
      </div>
      <div>
        <IconButton>
            {true ? <BookmarkAddIcon/> : <BookmarkBorderIcon/>}
        </IconButton>
      </div>

      </CardActions>
    </Card>
  );
};

export default PostCard;
