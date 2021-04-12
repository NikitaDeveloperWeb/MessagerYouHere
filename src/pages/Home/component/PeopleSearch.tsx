import React from 'react';
import Avatar from '../../../components/Avatar';
import FormSearch from '../../../components/forms/FormSearch';
import SmsIcon from '@material-ui/icons/Sms';

const PeopleArray: any[] = [];

function PeopleSearch() {
  return (
    <div className="PeopleSearch">
      <h1>Search people</h1>
      <span></span>
      <FormSearch />
      <span></span>
      <div className="PeopleSearch__list">
        <h2>Rezult</h2>
        <span></span>
        {(PeopleArray.length !== 0 &&
          PeopleArray.map((people) => (
            <div className="people" key={people._id}>
              {<Avatar user={people} classname="avatar-md" />}
              <div className="people__data">
                <h2>{people.firstname + ' ' + people.lastname}</h2>
                <h3>
                  <p>Username: </p>
                  {people.username}
                </h3>
                <h3>
                  <p>Phone: </p>
                  {people.phone}
                </h3>
                <h3>
                  <p>Mail: </p>
                  {people.mail}
                </h3>
                <SmsIcon />
              </div>
            </div>
          ))) || <p>Enter request...</p>}
      </div>
    </div>
  );
}

export default PeopleSearch;
