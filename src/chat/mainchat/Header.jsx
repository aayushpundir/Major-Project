import React from 'react';
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
  return (
    <Card sx={{  borderRadius:0 }}>
      <CardHeader
        avatar={
          <>
            <Button sx={{ minWidth: "auto", mr: 1 }}>
              <ArrowBackIcon />
            </Button>
            <Avatar>R</Avatar>
          </>
        }
        action={
          <>
            <IconButton>
              <VideoCallIcon />
            </IconButton>

            <IconButton>
              <CallIcon />
            </IconButton>
          </>
        }
        title="Rudransh Pokhriyal"
        subheader={
          <Typography variant="caption">Software Engineer</Typography>
        }
      />
    </Card>
  )
}

export default Header;