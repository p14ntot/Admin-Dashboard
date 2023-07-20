// import CheckBox from "./CheckBox";

// const Titles = () => {
//   return (
//     <div>
            
//         <table>
//           <thead className="table-header">
//             <tr className="head">
//                 <div className='user'>
//                     <div className="checkbox-wrapper">
//                         <CheckBox />
//                     </div>               
//                     <th className="text-XX-small subtext user">USER</th>
//                     <hr className="line"></hr>
//                 </div>
                
//                 <th className="text-XX-small subtext status">STATUS</th>
//                 <hr className="line"></hr>
//                 <th className="text-XX-small subtext phone-number">PHONE NUMBER</th>
//                 <hr className="line"></hr>
//                 <th className="text-XX-small subtext position">POSITION</th>
//                 <hr className="line"></hr>
//                 <th className="text-XX-small subtext private-email">DEPARTMENT </th>
//                 <hr className="line"></hr>
//                 <th className="text-XX-small subtext activity">ACTIVITY</th>
              
//             </tr>
            
//           </thead>
//           <hr className="line-big"></hr>
//         </table>
//     </div>
    
//   );
// };

// export default Titles;



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
                    <hr className="line"></hr>
                    
                </div>
                
                <div className="text-XX-small subtext status table-header">STATUS  <hr className="line"></hr></div>

                
                
                <div className="text-XX-small subtext phone-number table-header">PHONE NUMBER <hr className="line"></hr></div>
                
                <div className="text-XX-small subtext position table-header">POSITION <hr className="line"></hr></div>
                
                <div className="text-XX-small subtext private-email table-header">DEPARTMENT <hr className="line"></hr></div>
                
                <div className="text-XX-small subtext activity table-header">ACTIVITY</div>
                

             
            </div>
            
  );
};

export default Titles;             


