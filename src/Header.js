import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TemporaryDrawer from './TemporaryDrawer'; // Import Drawer component
import './index.css';
import Avatar from '@mui/material/Avatar';
import avatarPic from './assets/avatar.jpeg';
import Button from '@mui/material/Button';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing authentication tokens)
    console.log('User logged out');
    
    // Redirect to another page, e.g., login page
    navigate('/'); // Replace '/login' with the desired path
  };

  return (
    <AppBar position="static" color="lightpink">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TemporaryDrawer />
        <h1 className="header-title" style={{ flexGrow: 1, textAlign: 'center' }}>
          <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>
            Nurul Shafiqah
          </Link>
        </h1>
        <Avatar alt='Shafiqah' src={avatarPic} />
        <Button 
        variant="contained" 
        color="#ed7729" 
        onClick={handleLogout}
        sx={{ fontSize: '0.60rem', padding: '2px 2px', ml: '10px;', }}
        >
            Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;