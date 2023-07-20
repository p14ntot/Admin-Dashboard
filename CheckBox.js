import React, { useState } from 'react';
const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };
    
    
    return (  
        <div>
            <label >
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