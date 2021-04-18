import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

interface DialogPreviewProps {
  _id: string;
  interlocutor: {
    _id: string;
    avatar: string;
    firstname: string;
    lastname: string;
  };
  data: string;
  time: string;
  lastMessage: string;
  numberOfUnread: number;
  lastSender: {
    _id: string;
    avatar: string;
    firstname: string;
    lastname: string;
  };
  status: boolean;
}

function DialogPreview({
  _id,
  interlocutor,
  data,
  time,
  numberOfUnread,
  lastMessage,
  lastSender,
  status,
}: DialogPreviewProps) {
  return (
    <Link to="" className={status ? 'DialogPreview' : 'DialogPreview Unread'}>
      <div className="DialogPreview__avatar">
        <Avatar user={interlocutor} classname="avatar-sm" />
      </div>
      <div className="DialogPreview__data">
        <div className="DialogPreview__data__name">
          <h3>{interlocutor.firstname + ' ' + interlocutor.lastname}</h3>
          <p>{data + ' ' + time}</p>
        </div>
        <div className="DialogPreview__data__lastMessage">
          {lastSender._id !== interlocutor._id && (
            <Avatar user={lastSender} classname="avatar-mini" />
          )}
          <p>{lastMessage}</p>
        </div>
      </div>
      <div className="DialogPreview__statusMessage">
        {numberOfUnread !== 0 && <span>{numberOfUnread}</span>}
      </div>
    </Link>
  );
}

export default DialogPreview;
