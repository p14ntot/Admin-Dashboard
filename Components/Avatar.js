import React from 'react';

const Avatar = ({ userName }) => {
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    return nameArray.map((part) => part.charAt(0).toUpperCase()).join('');
  };

  const initials = getInitials(userName);

  return (
    <div
      style={{
        width: '43px', // Set the desired width and height for your avatar
        height: '43px',
        borderRadius: '50%', // Make it a circle by setting the border radius to half of the width/height
        background: '#CCCCCC', // Customize the background color or use an image as the avatar background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px', // Set the font size to adjust the size of the initials inside the avatar
        fontWeight: 'bold',
        color: '#FFFFFF', // Set the text color for the initials
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;