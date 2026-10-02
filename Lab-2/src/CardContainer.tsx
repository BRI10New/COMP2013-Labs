import React from 'react';
import { Card } from './Card';
import listings from './data/data';

export function CardContainer() {
  return (
    <div className="card-container">
      {listings.map((listing) => (
        <Card key={listing.id} {...listing} />
      ))}
    </div>
  );
}