import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
// icons
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

interface NavigationProps {
  active: number;
}

const user = {
  _id: '12',
  firstname: 'Nikita',
  avatar: '',
};

function Navigation({ active }: NavigationProps) {
  return (
    <div className="Navigation">
      <nav>
        <Link to="/home">
          <span className={active === 0 ? 'active' : 'disablet'}></span>
          <Avatar user={user} classname="avatar-sm" />
        </Link>
        <Link to="/messages">
          <span className={active === 1 ? 'active' : 'disablet'}></span>
          <MessageIcon />
        </Link>
        <Link to="/search">
          <span className={active === 2 ? 'active' : 'disablet'}></span>
          <PeopleIcon />
        </Link>
        <Link to="/setting">
          <span className={active === 3 ? 'active' : 'disablet'}></span>
          <SettingsIcon />
        </Link>
      </nav>
      <MeetingRoomIcon />
    </div>
  );
}

export default Navigation;
