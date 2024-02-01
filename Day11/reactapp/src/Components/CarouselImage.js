import React from 'react';
import { Card } from 'react-bootstrap';

const CarouselImage = ({ src, alt, caption }) => {
  return (
    <Card>
      <Card.Img src={src} alt={alt} />
      {caption && (
        <Card.ImgOverlay>
          <Card.Title>{caption}</Card.Title>
        </Card.ImgOverlay>
      )}
    </Card>
  );
};

export default CarouselImage;