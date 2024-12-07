import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React from "react";

const ChatArea = () => {
  return (
    <Box sx={{ overflowY: "auto", flex: "1 0 0", background: "#f9f9f9" }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "#f9f9f9",
        }}
      >
        <Chip label="Today" />
      </Stack>
      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5, ml: 1 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Rudransh Pokhriyal"
                secondary={
                  <Typography variant="caption">fkasdjf aksdhf hasdkf ashdjfh kahsdf jkshd fjkad fhajsdhf jhsjdh fjhasdj hfjh ffhjaskdhfjk asdh fjkhasdjk fhjkashdfjk hasjkdf jashd fjkashdjkfhajsk dhfkj hasjdfh jashdfj kahsdjf hasjkdfh jksh fjkhsdfjk hasjkd fhjkashjdfhjsd fkjasdh fkasdhjfh kdsjhffjkdsh kfskjdhf hsadjk hfjkahsdkjfh jaskdhfj hasjdkhf jkhds fhsdjk fhjkhsdjfk hasdfh asdhf hsadjfh jsdhf sjdhfjkadsasgsadg dsfgdfgsdfdf gdf gdfgdfg sdfgsdfgdsfg sdfg sdf g sdfg  dsfg sd fg dsf g dsfg  dsfg  dfg sdf g sdf g sdfg sd fg sdf g dsfg</Typography>
                }
              />
              <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", mt: 1 }}>
                <Typography variant="body2">12:20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>

                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>

        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "80%",
              flexDirection: "row-reverse",
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5, mr: 1, bgcolor:"primary.light", color:"primary.contrastText" }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Rudransh Pokhriyal"
                secondary={
                  <Typography variant="caption">fkasdjf aksdhf hasdkf ashdjfh kahsdf jkshd fjkad fhajsdhf jhsjdh fjhasdj hfjh ffhjaskdhfjk asdh fjkhasdjk fhjkashdfjk hasjkdf jashd fjkashdjkfhajsk dhfkj hasjdfh jashdfj kahsdjf hasjkdfh jksh fjkhsdfjk hasjkd fhjkashjdfhjsd fkjasdh fkasdhjfh kdsjhffjkdsh kfskjdhf hsadjk hfjkahsdkjfh jaskdhfj hasjdkhf jkhds fhsdjk fhjkhsdjfk hasdfh asdhf hsadjfh jsdhf sjdhfjkadsasgsadg dsfgdfgsdfdf gdf gdfgdfg sdfgsdfgdsfg sdfg sdf g sdfg  dsfg sd fg dsf g dsfg  dsfg  dfg sdf g sdf g sdfg sd fg sdf g dsfg</Typography>
                }
              />
              <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", mt: 1 }}>
                <Typography variant="body2">12:20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>

                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5, ml: 1 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Rudransh Pokhriyal"
                secondary={
                  <Typography variant="caption">fkasdjf aksdhf hasdkf ashdjfh kahsdf jkshd fjkad fhajsdhf jhsjdh fjhasdj hfjh ffhjaskdhfjk asdh fjkhasdjk fhjkashdfjk hasjkdf jashd fjkashdjkfhajsk dhfkj hasjdfh jashdfj kahsdjf hasjkdfh jksh fjkhsdfjk hasjkd fhjkashjdfhjsd fkjasdh fkasdhjfh kdsjhffjkdsh kfskjdhf hsadjk hfjkahsdkjfh jaskdhfj hasjdkhf jkhds fhsdjk fhjkhsdjfk hasdfh asdhf hsadjfh jsdhf sjdhfjkadsasgsadg dsfgdfgsdfdf gdf gdfgdfg sdfgsdfgdsfg sdfg sdf g sdfg  dsfg sd fg dsf g dsfg  dsfg  dfg sdf g sdf g sdfg sd fg sdf g dsfg</Typography>
                }
              />
              <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", mt: 1 }}>
                <Typography variant="body2">12:20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>

                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default ChatArea;
