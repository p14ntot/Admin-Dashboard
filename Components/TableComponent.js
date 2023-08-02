







// import React, { useState, useRef } from "react";
// import CheckBox from "./CheckBox";
// import Avatar from "./Avatar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
// import PopUpDeleteUpdate from "./PopUpDeleteUpdate";

// const TableComponent = (props) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const dotIconRef = useRef();
//   const [openPopUpDeleteUpdate,setOpenPopUpDeleteUpdate]=useState(false);

//   const handleIconClick = () => {
//     setShowPopup(!showPopup);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const getDotIconPosition = () => {
//     const dotIconElement = dotIconRef.current;
//     if (dotIconElement) {
//       const { top, left, width } = dotIconElement.getBoundingClientRect();
//       return {
//         top: top + dotIconElement.offsetHeight,
//         left: left + width / 2,
//       };
//     }
//     return null;
//   };

//   const dotIconPosition = getDotIconPosition();

//   return (
//     <div className="table-row">
//       <div className="check-box-name">
//         <div className="checkbox-wrapper">
//           <CheckBox />
//         </div>
//         <div className="avatar-name">
//           <Avatar userName={props.userName} />
//           <p className="name-typography user-name table-data">{props.userName}</p>
//         </div>
//       </div>
//       <div className="text-regular is-active table-data">{props.active}</div>
//       <div className="text-regular phone table-data">{props.phoneNumber}</div>
//       <div className="text-regular position-of-component table-data">{props.position}</div>
//       <div className="text-regular department-of-component table-data">{props.department}</div>
//       <div className="text-regular activity-of-component table-data">{props.activity}</div>
//       <div ref={dotIconRef} className="dot-icon" onClick={handleIconClick}>
//         <FontAwesomeIcon icon={faEllipsisVertical} />
//       </div>

//       {/* Conditionally render the PopUpDeleteUpdate component */}
//       {showPopup && dotIconPosition && (
//         <PopUpDeleteUpdate
//           position={dotIconPosition}
//           onClose={handleClosePopup}
//           onDelete={props.onDelete}
//           onUpdate={props.onEdit} // Use props.onEdit to trigger the update
//         />
//       )}
//     </div>
//   );
// };

// export default TableComponent;



import React, { useState, useRef } from "react";
import CheckBox from "./CheckBox";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import PopUpDeleteUpdate from "./PopUpDeleteUpdate";

const TableComponent = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const dotIconRef = useRef();
  const [openPopUpDeleteUpdate, setOpenPopUpDeleteUpdate] = useState(false);

  const handleIconClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const getDotIconPosition = () => {
    const dotIconElement = dotIconRef.current;
    if (dotIconElement) {
      const { top, left, width } = dotIconElement.getBoundingClientRect();
      return {
        top: top + dotIconElement.offsetHeight,
        left: left + width / 2,
      };
    }
    return null;
  };

  const dotIconPosition = getDotIconPosition();

  return (
    <div className="table-row">
      <div className="check-box-name">
        <div className="checkbox-wrapper">
          <CheckBox />
        </div>
        <div className="avatar-name">
          <Avatar userName={props.userName} />
          <p className="name-typography user-name table-data">{props.userName}</p>
        </div>
      </div>
      <div className="text-regular is-active table-data">{props.active}</div>
      <div className="text-regular phone table-data">{props.phoneNumber}</div>
      <div className="text-regular position-of-component table-data">{props.position}</div>
      <div className="text-regular department-of-component table-data">{props.department}</div>
      <div className="text-regular activity-of-component table-data">{props.activity}</div>
      <div ref={dotIconRef} className="dot-icon" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>

      {/* Conditionally render the PopUpDeleteUpdate component */}
      {showPopup && dotIconPosition && (
        <PopUpDeleteUpdate
          position={dotIconPosition}
          onClose={handleClosePopup}
          onDelete={() => {
            props.onDelete();
            setShowPopup(false);
          }}
          onUpdate={() => {
            props.onEdit();
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default TableComponent;