import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './index.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem className="drawer-list-item" key="Home" disablePadding>
          <ListItemButton component={Link} to="/home">
            <ListItemIcon>
            <img
              src={`${process.env.PUBLIC_URL}/icons/kuromi-icons.png`}
              alt="Home"
              className="kuromi-icon"
            />
            </ListItemIcon>
            <ListItemText className="drawer-title" primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem className="drawer-list-item" key="FirstDate" disablePadding>
          <ListItemButton component={Link} to="/firstdate">
            <ListItemIcon>
              <img
                src={`${process.env.PUBLIC_URL}/icons/kuromi-icons.png`}
                alt="Home"
                className="kuromi-icon"
              />
            </ListItemIcon>
            <ListItemText className="drawer-title" primary="First Date" />
          </ListItemButton>
        </ListItem>
        {/* Add more items as needed */}
        <ListItem className="drawer-list-item" key="Memories" disablePadding>
          <ListItemButton component={Link} to="/memories">
            <ListItemIcon>
              <img
                src={`${process.env.PUBLIC_URL}/icons/kuromi-icons.png`}
                alt="Home"
                className="kuromi-icon"
              />
            </ListItemIcon>
            <ListItemText className="drawer-title" primary="Memories" />
          </ListItemButton>
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="tombol_menu" onClick={toggleDrawer(true)}></div>
      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#cbc3e3', // Customize the background color
            border: 'none', // Remove border
            borderRadius: '0 10px 10px 0',
            boxShadow: 'none', // Remove shadow
          },
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}