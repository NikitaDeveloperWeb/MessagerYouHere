import React from 'react';
import generateAvatarFromHash from '../utils/generateAvatarFromHash';

interface AvatarProps {
  user: {
    _id: string;
    avatar: string;
    firstname: string;
  };
  classname: 'avatar-mini' | 'avatar-sm' | 'avatar-md' | 'avatar-hg';
}

function Avatar({ user, classname }: AvatarProps) {
  if (user.avatar) {
    return <img className={classname} src={user.avatar} alt={`Avatar ${user.firstname}`} />;
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.firstname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className={`${classname} ${classname}--symbol`}>
        {firstChar}
      </div>
    );
  }
}

export default Avatar;
