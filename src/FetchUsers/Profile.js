import React from "react";
const Profile = ({ name, id, phone, email }) => {
  return (
    <>
      <div
        style={{
          // display: "inline",
          width: "50%",
          border: "1px solid black",
          backgroundColor: "gray",
          margin: 2,
          padding: 5,
        }}
      >
        <h4>
          {id}-{name}
        </h4>
        <p>Phone :- {phone}</p>
        <p>Email : {email}</p>
        <p>Change is made</p>
      </div>
    </>
  );
};

export default Profile;
