import React, { useEffect } from 'react';
import SideBar from './sidebar/index';
import ChatBox from './mainchat';
import Profile from './profile';
import { Paper } from '@mui/material';
import  socket  from "./socket";

const Chat = () => {

  useEffect(() => {
    console.log(socket);  
  }, [socket]);

  return (
    <Paper square elevation={0} sx={{ widht: "100vh", display: "flex", height: "98vh" }}>
      <SideBar />
      <ChatBox />
      <Profile />
    </Paper>
  )
}

export default Chat;