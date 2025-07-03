import React from "react";
import Avatar from "@mui/material/Avatar";
import { navigationMenu } from "./sidebarmenu.jsx";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from "@mui/material/Card";


const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      className="card h-screen flex flex-col justify-between py-5"
      sx={{ minWidth: 350, maxWidth: 450 }} // ekhane width barano holo
    >
      <div className="space-y-8 pl-5 w-96"> {/* w-80 = 20rem, aro barate chaile w-96/w-[28rem] use korte paren */}
        <div>
          <span className="logo font-bold text-xl">Sociofy</span>
        </div>
        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              className="flex space-x-3 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
              key={item.title}
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider className="my-4" />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
            <div>
              <p className="text-lg font-semibold">Code With Niloy</p>
              <p className="text-sm text-gray-500">@codewithniloy</p>
            </div>
          </div>
          <div>
           <MoreVertIcon
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
