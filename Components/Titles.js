import React from 'react';
import CheckBox from './CheckBox';


const Titles = () => {
  

  return (
            <div className="head "> 
                
                <div className="user">
                  
                    <div className="checkbox-wrapper">
                      <CheckBox />
                    </div>
                    <div className='text-XX-small subtext user-text table-header'>
                    USER 
                    </div>
                    
                    
                </div>
                
                <div className="text-XX-small subtext status table-header">STATUS  </div>

                
                
                <div className="text-XX-small subtext phone-number table-header">PHONE NUMBER </div>
                
                <div className="text-XX-small subtext position table-header">POSITION </div>
                
                <div className="text-XX-small subtext private-email table-header">DEPARTMENT </div>
                
                <div className="text-XX-small subtext activity table-header">ACTIVITY</div>
                

             
            </div>
            
  );
};

export default Titles;             



        


