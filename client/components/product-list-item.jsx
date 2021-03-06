import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductListItem extends React.Component {
  render() {
    const price = (this.props.item.price / 100).toFixed(2);
    return (
      <div className="col-lg-4 col-md-6 p-2">
        <Link to={`/item?${this.props.item.productId}`}>
          <div className="card h-100">
            <img src={this.props.item.image} className="card-img-top size pointer" alt="" />
            <div className="card-body card-bot">
              <h5 className="card-title">{this.props.item.name}</h5>
              <label className="text-muted">${price}</label>
              <p className="card-text">{this.props.item.shortDescription}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
