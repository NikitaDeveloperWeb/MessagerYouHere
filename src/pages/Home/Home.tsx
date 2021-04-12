import React from 'react';
import Avatar from '../../components/Avatar';
import Navigation from '../../components/Navigation';
import Messages from './component/Messages';
import PeopleSearch from './component/PeopleSearch';
import Profile from './component/Profile';
import Setting from './component/Setting';

interface HomeProps {
  page: 'message' | 'search' | 'setting' | 'home';
}

function Home({ page }: HomeProps) {
  let index: number;
  if (page === 'home') {
    index = 0;
  } else if (page === 'message') {
    index = 1;
  } else if (page === 'search') {
    index = 2;
  } else {
    index = 3;
  }
  const user = {
    _id: '12',
    firstname: 'Nikita',
    lastname: 'Rusakov',
    username: 'rusak',
    mail: 'rusakdeveloper@gmail.com',
    phone: '89518054459',
    avatar: '',
  };

  return (
    <div className="HomeInterface">
      <Navigation active={index} />
      <div className="content">
        {page === 'home' && (
          <Profile
            _id={user._id}
            username={user.username}
            firstname={user.firstname}
            lastname={user.lastname}
            mail={user.mail}
            phone={user.phone}
            avatar={<Avatar user={user} classname="avatar-hg" />}
          />
        )}
        {page === 'search' && <PeopleSearch />}
        {page === 'setting' && <Setting />}
        {page === 'message' && <Messages />}
      </div>
    </div>
  );
}

export default Home;
