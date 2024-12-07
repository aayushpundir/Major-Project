import React, { useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const SideBar = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "25vw", display: "flex", flexDirection:"column", height:"100vh" }}>
      <Header />
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
        <Tab label="Chat List" />
        <Tab label="User List" />
      </Tabs>
      {value === 0 && 
        (
          <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rajvansh Singh Chauhan"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Gaurav Maheshwari"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Lakshay Garg"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Vaibhav Rai"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Idli Dosa"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Rudransh Pokhriyal"
                secondary={
                    <Typography
                      variant="caption"
                    >
                    Ali Connors
                    </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
          </List>
        )
      }
      {value === 1 && <div>1</div>}
    </Box>
  )
}

export default SideBar;