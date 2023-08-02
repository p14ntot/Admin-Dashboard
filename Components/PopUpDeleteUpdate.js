// import React from "react";
// import { useState } from "react";

// const PopUpDeleteUpdate = ({ onClose, position, onDelete, onUpdate }) => {
//   const [openPopUp,setOpenPopUp]=useState(false);
//   return (
//     <div className="popup-delete" style={position}>
//       <button className="delete-close-button" onClick={onClose}>
//         X
//       </button>
//       <h3>Delete or Update Actions</h3>
//       <button onClick={onDelete}>Delete</button>
//       <button onClick={onUpdate}>Update</button>
//     </div>
//   );
// };

// export default PopUpDeleteUpdate;
import React from "react";

const PopUpDeleteUpdate = ({ onClose, position, onDelete, onUpdate }) => {
  return (
    <div className="popup-delete" style={position}>
      <button className="delete-close-button" onClick={onClose}>
        X
      </button>
      <h3>Delete or Update Actions</h3>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
};

export default PopUpDeleteUpdate;


