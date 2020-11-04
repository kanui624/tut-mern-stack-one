// Dependencies
import React from 'react';

// Components
import UsersList from '../components/UsersList';

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kanui',
      image:
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default User;
