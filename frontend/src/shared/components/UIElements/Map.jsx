// Dependencies
import React, { useRef, useEffect } from 'react';

// CSS
import './Map.css';

const Map = ({ className, center, zoom, style }) => {
  const mapRef = useRef();

  useEffect(() => {
    const initMap = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: initMap });
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${className}`} style={style}></div>;
};

export default Map;
