// Dependencies
import React from 'react';

// Components
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

// CSS
import './PlaceItem.css';
const PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>View Place on Map</Button>
          <Button to={`/places/${id}`}>Edit Place</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
