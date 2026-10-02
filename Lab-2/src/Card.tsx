import type { ResortListing } from './data/data';

export function Card({ pic, country, location, rating, price }: ResortListing) {
  const goodRating = rating > 4.0;

  return (
    <div className="card">
      <img src={pic} alt={location} className="card-image" />
      <div className="card-content">
        <p className="card-country">{country}</p>
        <h3 className="card-location">{location}</h3>
        
        <div className="card-rating">
          <span className="star">★</span>
          <span style={{ color: goodRating ? 'green' : 'red', fontWeight: 'bold' }}>
            {rating}
          </span>
        </div>

        <p className="card-price">${price} / night</p>
      </div>
    </div>
  );
}