

import React from 'react';

const CheckBox = ({ isChecked, handleChange }) => {
  return (
    <div>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default CheckBox;
