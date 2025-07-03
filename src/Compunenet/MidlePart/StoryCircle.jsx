import Avatar from '@mui/material/Avatar'
import React from 'react'


const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "6rem", height: "6rem" }}
            src="https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg"
          >
            
          </Avatar>
          <p>Code With Niloy</p>
        </div>
    </div>
  )
}

export default StoryCircle
