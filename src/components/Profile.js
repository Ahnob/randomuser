import React from 'react';

const Profile = (props) => {
  console.log(props)
  return (
    <div className="each-user">
      <div>
        <img src="https://randomuser.me/api/portraits/women/71.jpg" />
      </div>
      <h1>
        Name:
        {"Boy"} {"Name"}
      </h1>
      <h2>Email:{"anob@gmail.com"}</h2>
      <h2> Location:{"Germany"}</h2>
    </div>
  );
};

export default Profile;
