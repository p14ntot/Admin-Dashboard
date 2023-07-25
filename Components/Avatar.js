
import React from 'react';

const Avatar = ({ userName }) => {
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    return nameArray.map((part) => part.charAt(0).toUpperCase()).join('');
  };

  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFEF', '#33EF57']; 
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const initials = getInitials(userName);
  const backgroundColor = getRandomColor(); 

  return (
    <div
      style={{
        width: '43px',
        height: '43px',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '50%',
        background: backgroundColor, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#FFFFFF',
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
