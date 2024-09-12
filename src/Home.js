import React, { useState, useEffect } from 'react';
import kuromi from './assets/kuromi-sitting.gif';
import './index.css';
import Header from './Header';

export default function Home() {
  // State variables for time and greeting
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');

  // Function to format the current time and date
  const formatAMPM = () => {
    const now = new Date();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    return (
      <div>
        <h1 className="ml1">
          <span className="text-wrapper">
            <span className="line line1"></span>
            <span className="letters">
              {days[now.getDay()]}, {now.getDate()} {months[now.getMonth()]} {now.getFullYear()}
            </span>
            <span className="line line2"></span>
          </span>
        </h1>
        <p className="ml2">
          {hours}:{minutes} {ampm}
        </p>
      </div>
    );
  };

  // Function to get greeting message based on current hour
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour <= 24) {
      return (
        `I've been wishing from the start as when you're making your own journal and keeping our memories together.
         I would love to do that but as you know, I am not someone who is into that. 
         But it's my dream to make my own as well, and this is one way to do it hahaha. 
         It may seem troublesome but trust me, it's worth it. So enjoy!`
      );
    }
    return '';
  };

  // Update time and greeting when the component mounts
  useEffect(() => {
    setTime(formatAMPM());
    setGreeting(getGreeting());

    // Update time every minute
    const timer = setInterval(() => {
      setTime(formatAMPM());
    }, 60000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <Header />
      <div className="home-page">
        <img src={kuromi} className="kuromi-sitting" alt="kuromi"></img>
        <h1 className="page-title">Home Page</h1>
        <br />
        <div id="time">
          {time}
        </div>
        <h1 className="ucapan">Hi Sayang!</h1>
        <p className="isiucapan">{greeting}</p>
      </div>
    </>
  );
}