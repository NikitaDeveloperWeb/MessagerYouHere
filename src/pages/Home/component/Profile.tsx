import React from 'react';

interface ProfileProps {
  _id: string;
  avatar?: JSX.Element | JSX.Element[] | Element | Element[];
  firstname: string;
  lastname: string;
  phone: string;
  mail: string;
  username: string;
}

function Profile({ _id, avatar, firstname, lastname, phone, mail, username }: ProfileProps) {
  return (
    <div className="Profile">
      <div className="Profile__avatar">{avatar && avatar}</div>
      <div className="Profile__data">
        <h1>{firstname + ' ' + lastname}</h1>
        <span></span>
        <h2>You profile data:</h2>
        <span></span>
        <h3>
          <p>Username: </p>
          {username};
        </h3>
        <h3>
          <p>Mail: </p>
          {mail};
        </h3>
        <h3>
          <p>Phone: </p>
          {phone};
        </h3>
        <span></span>
      </div>
    </div>
  );
}

export default Profile;
