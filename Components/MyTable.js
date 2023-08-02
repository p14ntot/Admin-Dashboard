// import React, { useState, useEffect } from "react";
// import Button from "./Button";
// import Titles from "./Titles";
// import TableComponent from "./TableComponent";
// import PopupForm from "./PopUpForm";
// import PopUpDeleteUpdate from "./PopUpDeleteUpdate";

// const MyTable = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [editedUserData, setEditedUserData] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [openPopUpDeleteUpdate,setOpenPopUpDeleteUpdate]=useState(false);

   
  
//   // Fetch for Read
//   useEffect(() => {
//     // Fetch profiles data from the server and set it in the state
//     fetch("http://192.168.20.199:3000/profiles")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Απάντηση διακομιστή που δεν είναι OK");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProfiles(data.profiles);
//       })
//       .catch((error) => {
//         console.error("Σφάλμα κατά τη φόρτωση των δεδομένων:", error);
//       });
//   }, []);

  
  
  
  
  
//   //Fetch for Add
//   const handleAddUser = (newUser) => {
//     // Send the new user data to the backend API
//     fetch("http://192.168.20.199:3000/profiles/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           const message = response.json();
//           console.log(message);
//           throw new Error("Error adding user");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle the response from the backend if needed
//         console.log("User added successfully:", data);
//         // Refresh the user list 
//         // You can fetch the updated user list from the backend and update the profiles state
//         fetch("http://192.168.20.199:3000/profiles")
//           .then((response) => response.json())
//           .then((data) => setProfiles(data.profiles))
//           .catch((error) => {
//             console.error("Error fetching profiles:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error adding user:", error);
//       });

//     // Close the popup form
//     setShowPopup(false);
//   };

 
 
 
 
 
 
//   //Fetch for Delete
//   const handleDeleteUser = (userId) => {
//     fetch(`http://192.168.20.199:3000/profiles/${userId}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error deleting user");
//         }
//         // Refresh the user list after deletion (optional)
//         return fetch("http://192.168.20.199:3000/profiles")
//           .then((response) => response.json())
//           .then((data) => setProfiles(data.profiles))
//           .catch((error) => {
//             console.error("Error fetching profiles:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error deleting user:", error);
//       });
//   };

  
  
  
  
  
  
//   //Fetch for Update
//   const handleUpdateUser = (updatedUserData) => {
//     console.log('put body: ', updatedUserData)
//     fetch(`http://192.168.20.199:3000/profiles/${editedUserData.PhoneNumber}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedUserData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error updating user");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("User updated successfully:", data);
//         fetch("http://192.168.20.199:3000/profiles")
//           .then((response) => response.json())
//           .then((data) => setProfiles(data.profiles))
//           .catch((error) => {
//             console.error("Error fetching profiles:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error updating user:", error);
//       });

//     setShowPopup(false);
//   };



//   const handleEditUser = (user) => {
//     setEditedUserData(user);
//     setEditMode(true);
//     setShowPopup(true);
//     setOpenPopUpDeleteUpdate(false);
//   };



//   const handleFormSubmit = async (updatedUserData,editedUserData) => {
//     console.log(updatedUserData)
//     handleUpdateUser(updatedUserData, editedUserData.PhoneNumber);
//     setEditMode(false);
//     setEditedUserData(null);
//   };

//   const info = profiles.map((element) => (
//     <TableComponent
//       key={element.id}
//       userName={`${element.FirstName} ${element.LastName}`}
//       active={"-"}
//       phoneNumber={element.PhoneNumber}
//       position={element.Title}
//       department={"Department"}
//       activity={"Static Activity"}
//       onDelete={() =>{handleDeleteUser(element.PhoneNumber);setOpenPopUpDeleteUpdate(false);}}
        
//       onEdit={() => handleEditUser(element)}
//     />
//   ));

//   return (
//     <div className="table-wrapper">
//       <Titles />
//       {info}

//       <Button onClick={() => {
//         setEditMode(false)
//         setShowPopup(true)
//       }} />

//       {showPopup && (
//         <PopupForm
//           onClose={() => setShowPopup(false)}
//           onSubmit={handleAddUser} // Pass handleAddUser for adding new user
//           onUpdate={handleFormSubmit} // Pass handleFormSubmit for updating user
//           profiles={profiles}
//           editMode={editMode}
//           userData={editedUserData} // Pass editedUserData for pre-filling the form in "edit" mode
//         />
//       )}
//       {openPopUpDeleteUpdate && (
//       <PopUpDeleteUpdate
//         onClose={() => setOpenPopUpDeleteUpdate(false)}
        
//         onDelete={() => {
//           // Handle the delete action if needed
//           setOpenPopUpDeleteUpdate(false); // Close the PopUpDeleteUpdate form
//         }}
//         onUpdate={() => {
//           // Handle the update action if needed
//           setOpenPopUpDeleteUpdate(false); // Close the PopUpDeleteUpdate form
//         }}
//       />
//     )}

//     </div>
//   );
// };

// export default MyTable;


import React, { useState, useEffect } from "react";
import Button from "./Button";
import Titles from "./Titles";
import TableComponent from "./TableComponent";
import PopupForm from "./PopUpForm";
import PopUpDeleteUpdate from "./PopUpDeleteUpdate";

const MyTable = () => {
  const [profiles, setProfiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editedUserData, setEditedUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [openPopUpDeleteUpdate, setOpenPopUpDeleteUpdate] = useState(false);

  // Fetch for Read
  useEffect(() => {
    // Fetch profiles data from the server and set it in the state
    fetch("http://192.168.20.199:3000/profiles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Απάντηση διακομιστή που δεν είναι OK");
        }
        return response.json();
      })
      .then((data) => {
        setProfiles(data.profiles);
      })
      .catch((error) => {
        console.error("Σφάλμα κατά τη φόρτωση των δεδομένων:", error);
      });
  }, []);

  // Fetch for Add
  const handleAddUser = (newUser) => {
    // Send the new user data to the backend API
    fetch("http://192.168.20.199:3000/profiles/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          const message = response.json();
          console.log(message);
          throw new Error("Error adding user");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the backend if needed
        console.log("User added successfully:", data);
        // Refresh the user list
        // You can fetch the updated user list from the backend and update the profiles state
        fetch("http://192.168.20.199:3000/profiles")
          .then((response) => response.json())
          .then((data) => setProfiles(data.profiles))
          .catch((error) => {
            console.error("Error fetching profiles:", error);
          });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });

    // Close the popup form
    setShowPopup(false);
  };

  // Fetch for Delete
  const handleDeleteUser = (userId) => {
    fetch(`http://192.168.20.199:3000/profiles/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting user");
        }
        // Refresh the user list after deletion (optional)
        return fetch("http://192.168.20.199:3000/profiles")
          .then((response) => response.json())
          .then((data) => setProfiles(data.profiles))
          .catch((error) => {
            console.error("Error fetching profiles:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // Fetch for Update
  const handleUpdateUser = (updatedUserData) => {
    console.log("put body: ", updatedUserData);
    fetch(`http://192.168.20.199:3000/profiles/${editedUserData.PhoneNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error updating user");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User updated successfully:", data);
        fetch("http://192.168.20.199:3000/profiles")
          .then((response) => response.json())
          .then((data) => setProfiles(data.profiles))
          .catch((error) => {
            console.error("Error fetching profiles:", error);
          });
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });

    setShowPopup(false);
  };

  const handleEditUser = (user) => {
    setEditedUserData(user);
    setEditMode(true);
    setShowPopup(true);
    setOpenPopUpDeleteUpdate(false);
  };

  const handleFormSubmit = async (updatedUserData, editedUserData) => {
    console.log(updatedUserData);
    handleUpdateUser(updatedUserData, editedUserData.PhoneNumber);
    setEditMode(false);
    setEditedUserData(null);
  };

  const info = profiles.map((element) => (
    <TableComponent
      key={element.id}
      userName={`${element.FirstName} ${element.LastName}`}
      active={"-"}
      phoneNumber={element.PhoneNumber}
      position={element.Title}
      department={"Department"}
      activity={"Static Activity"}
      onDelete={() => {
        handleDeleteUser(element.PhoneNumber);
        setOpenPopUpDeleteUpdate(false);
      }}
      onEdit={() => handleEditUser(element)}
    />
  ));

  return (
    <div className="table-wrapper">
      <Titles />
      {info}

      <Button
        onClick={() => {
          setEditMode(false);
          setShowPopup(true);
        }}
      />

      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)}
          onSubmit={handleAddUser}
          onUpdate={handleFormSubmit}
          profiles={profiles}
          editMode={editMode}
          userData={editedUserData}
          setOpenPopUpDeleteUpdate={setOpenPopUpDeleteUpdate}
        />
      )}

      {openPopUpDeleteUpdate && (
        <PopUpDeleteUpdate
          onClose={() => setOpenPopUpDeleteUpdate(false)}
          
          onDelete={() => {
            // Handle the delete action if needed
            setOpenPopUpDeleteUpdate(false);
          }}
          onUpdate={() => {
            // Handle the update action if needed
            setOpenPopUpDeleteUpdate(false);
          }}
        />
      )}
    </div>
  );
};

export default MyTable;