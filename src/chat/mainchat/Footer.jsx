import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Footer = () => {
  return (
    <Box sx={{ p:1, display:"flex" }}>
      <Box sx={{ display:"flex", alignItems:"center" }}>
        <Button sx={{ minWidth:"auto", mr: 1 }}>
          <MoreVertIcon />
        </Button>
        <Button sx={{ minWidth:"auto", mr: 1 }}>
          <InsertEmoticonIcon />
        </Button>
      </Box>
      <Box sx={{ display:"flex", flex: 1 }}>
        <TextField placeholder="Type Your Message" size='small' sx={{ "&.MuiInputBase-root": {
              borderRadius: 0,
              borderRight: 0,
            }, 
          }} 
          fullWidth
        />
        <Button variant='outlined' sx={{ borderRadius: 0, minWidth: "auto", height: "100%" }}>Send</Button>
      </Box>
    </Box>
  );
}

export default Footer;