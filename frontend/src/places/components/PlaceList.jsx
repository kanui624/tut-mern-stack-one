// Dependencies
import React from 'react';
// import { Link } from 'react-router-dom';

// CSS
import './PlaceList.css';

// Components
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {places.map(
        ({ id, imageUrl, title, description, address, creator, location }) => (
          <PlaceItem
            key={id}
            id={id}
            image={imageUrl}
            title={title}
            description={description}
            address={address}
            creatorId={creator}
            coordinates={location}
          />
        )
      )}
    </ul>
  );
};

export default PlaceList;
