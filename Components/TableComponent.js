
 import React from "react";
 import CheckBox from "./CheckBox";
 import Avatar from "./Avatar";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const TableComponent = (props) => {


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
            <div className="dot-icon"><FontAwesomeIcon icon={faEllipsisVertical} /></div>
            
    </div>
  );
};

export default TableComponent;







