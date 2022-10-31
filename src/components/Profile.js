import React from 'react';

const Profile = (props) => {
  const {user} = props
  return (
    <div className="each-user">
      <div>
        <img src={user.picture.large} />
      </div>
      <h1>
        Name:
        {user.name.first} {user.name.last}
      </h1>
      <h2>Email:{user.email}</h2>
      <h2> Location:{user.location.country}</h2>
    </div>
  );
};

export default Profile;
