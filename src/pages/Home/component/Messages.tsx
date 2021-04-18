import React from 'react';
import { Link } from 'react-router-dom';
import DialogPreview from '../../../components/DialogPreview';
import FormSearchDialogs from '../../../components/forms/FormSearchDialog';

const Dialogs: any[] = [
  {
    _id: '12',
    interlocutor: { _id: '11', avatar: '', firstname: 'Alice', lastname: 'Hostes' },
    lastMessage: 'Good bay',
    numberOfUnread: 0,
    lastSender: { _id: '12', avatar: '', firstname: 'Nikita', lastname: 'Rusakov' },
    data: '20/04/2021',
    time: '14:30',
    status: true,
  },
  {
    _id: '12',
    interlocutor: { _id: '11', avatar: '', firstname: 'Alice', lastname: 'Hostes' },
    lastMessage: 'Good bay',
    numberOfUnread: 5,
    lastSender: { _id: '11', avatar: '', firstname: 'Alice', lastname: 'Hostes' },
    data: '20/04/2021',
    time: '14:30',
    status: false,
  },
  {
    _id: '12',
    interlocutor: { _id: '11', avatar: '', firstname: 'Alice', lastname: 'Hostes' },
    lastMessage: 'Good bay',
    numberOfUnread: 5,
    lastSender: { _id: '12', avatar: '', firstname: 'Nikita', lastname: 'Rusakov' },
    data: '20/04/2021',
    time: '14:30',
    status: false,
  },
];

function Messages() {
  return (
    <div className="Messages">
      <h1>Messages</h1>
      <span></span>
      <FormSearchDialogs />
      <span></span>
      <ul className="Messages__dialogsList">
        {(Dialogs.length !== 0 &&
          Dialogs.map((dialog, index) => (
            <li key={`key ${dialog._id} + ${index}`}>
              <DialogPreview
                _id={dialog._id}
                interlocutor={dialog.interlocutor}
                data={dialog.data}
                time={dialog.time}
                lastMessage={dialog.lastMessage}
                lastSender={dialog.lastSender}
                numberOfUnread={dialog.numberOfUnread}
                status={dialog.status}
              />
            </li>
          ))) || (
          <p>
            Dialog list is empty <br />
            <Link to="/search">Create Dialog</Link>
          </p>
        )}
      </ul>
    </div>
  );
}

export default Messages;
