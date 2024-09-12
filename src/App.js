import React, { useState } from 'react';
import './index.css';
import kuromi from './assets/kuromi-hugs.gif';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function App() {
  const [name, setName] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [showInput, setShowInput] = useState(true); // State to control input visibility
  const [showAlert, setShowAlert] = useState(null); // State to manage alert visibility
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const inputName = event.target.value.toLowerCase(); // Convert input to lowercase
    setName(event.target.value); // Keep original case for display purposes

    // Check if the lowercase input name is either "haikal" or "shafiqah"
    if (inputName === 'haikal' || inputName === 'shafiqah') {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (authorized) {
        setShowAlert(
          <Alert icon={<CheckIcon fontSize="inherit" />} 
          severity="success" 
          onClose={() => setShowAlert(null)}
          sx={{ 
            backgroundColor: '#d4edda', // Light green background
            color: '#155724',            // Dark green text color
            fontWeight: 'bold',          // Bold text
            border: '1px solid #c3e6cb', // Border
            mt: 2,                       // Margin-bottom
            width: '50%'                // Full width
          }}
          >
            Goodjob sayang!
          </Alert>
        );
        setShowInput(false); // Hide input if authorized
      } else {
        setShowAlert(
          <Alert
            severity="error"
            onClose={() => setShowAlert(null)} // Close alert after some time or with a close button
            sx={{
              backgroundColor: '#f8d7da', 
              color: '#721c24',            
              fontWeight: 'bold',
              border: '1px solid #f5c6cb',
              width: '100%',
              maxWidth: '400px'            // Set a max-width for the alert box
            }}
          >
            TETTT!!!!! SALAH!!!
          </Alert>
        );
      }  
      event.preventDefault(); // Prevent default form submission
    }
  };

  const handleNavigate = () => {
    navigate('/home'); // Navigate to the /home route on button click
  };

  return (
    <div className='container'>
      <img src={kuromi} className="kuromi-hugs" alt="Kuromi" />
      <h1>My Own Personal Diary with You</h1>
      {showInput && (
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your name"
        />
      )}
      {!showInput && authorized && (
        <button className="tombol" onClick={handleNavigate}>
          Open This
        </button>
      )}
      {/* Show the alert if set */}
      {showAlert && (
        <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',   // Align items to start (top of the container)
          height: '100vh',            // Full viewport height
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: '100px',        // Push the alert 100px down from the top
          zIndex: 1          // Ensure the alert is above other content
          }}
        >
          {showAlert}
        </div>
      )}
    </div>
  );
}