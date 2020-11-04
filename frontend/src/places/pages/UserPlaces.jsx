// Dependencies
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import PlaceList from '../components/PlaceList';

// CSS
import './UserPlaces.css';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire A Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: 'u1',
    },
    {
      id: 'p2',
      title: 'Empire B Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: 'u2',
    },
  ];

  const userId = useParams().userId;
  const userSpecificPlaces = DUMMY_PLACES.filter(
    ({ creator }) => creator === userId
  );
  return <PlaceList places={userSpecificPlaces} />;
};

export default UserPlaces;
