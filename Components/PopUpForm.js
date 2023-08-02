
import React, { useState, useEffect } from 'react';


const PopupForm = ({ onClose, onSubmit, onUpdate, profiles, editMode, userData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  // Pre-fill form fields when in "edit" mode
  useEffect(() => {
    console.log("profiles:", profiles);
    console.log("userData:", userData);
    if (editMode && userData) {
      setFirstName(userData.FirstName);
      setLastName(userData.LastName);
      setPhoneNumber(userData.PhoneNumber);
    } else {
      // Reset form fields when in "add" mode
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    }
  }, [editMode, userData,profiles]);
  // Function to handle form submission
  const handleSubmit = () => {
    if (!editMode) {
      // Check if the phone number already exists in the profiles
      const phoneNumberExists = profiles.some(
        (profile) => profile.PhoneNumber === phoneNumber
      );
      if (phoneNumberExists) {
        setErrorMessage("Phone number already exists.");
        return; // Exit the function early without calling onSubmit or onUpdate
      }
    }

    if (editMode) {
      // Check if the new phone number already exists and is different from the old phone number
      const newPhoneNumberExists = profiles.some(
        (profile) => profile.PhoneNumber === phoneNumber && profile.PhoneNumber !== userData.PhoneNumber
      );
      if (newPhoneNumberExists) {
        setErrorMessage("New phone number already exists");
        return; // Exit the function early without calling onSubmit or onUpdate
      }
    }

    if (firstName === "") {
      setErrorMessage("First name can not be empty");
      return;
    }
    if (lastName === "") {
      setErrorMessage("Last name can not be empty");
      return;
    }
    if (phoneNumber===""){
      setErrorMessage('Phone number can not be empty');
      return;
    }

    // Create an object to hold the form data
    const newUser = {
      firstName,
      lastName,
      phoneNumber, 
    };
    // Call the onSubmit function with the new user data in "add" mode
    // or call the onUpdate function with the updated user data in "edit" mode
    if (editMode) {
      onUpdate(newUser,phoneNumber);
    } else {
      onSubmit(newUser);
    }
    // Reset the form fields when in "add" mode
    if (!editMode) {
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <div className="popup-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{editMode ? "Edit user" : "Add new user"}</h2>
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone-Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="button" onClick={handleSubmit}>
              {editMode ? "Update" : "Submit"}
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;


