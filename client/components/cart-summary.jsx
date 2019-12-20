import React from 'react';
import { Link } from 'react-router-dom';

class CartSummaryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
      qtyValidation: ''
    };
  }

  quantityOnChange(event) {
    const qty = event.target.value;
    if (qty > 0 && qty.indexOf('.') === -1) {
      this.setState({
        quantity: qty,
        qtyValidation: ''
      });
    } else {
      this.setState({
        quantity: '',
        qtyValidation: 'Item quantity cannot be empty'
      });
    }
  }

  render() {
    return (
      <div className="row border mb-4 bg-white shadow-sm p-3">
        <img src={this.props.item.image} className="col-5 size" />
        <div className="col-7">
          <h2>{this.props.item.name}</h2>
          <label className="text-muted">${(this.props.item.price / 100).toFixed(2)}</label>
          <p>{this.props.item.shortDescription}</p>
          <div>Item Quantity:</div>
          <input
            className="border shadow-sm input-quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.quantityOnChange.bind(this)} />
          <div className="text-danger">{this.state.qtyValidation}</div>
        </div>
      </div>
    );
  }
}

export default class CartSummary extends React.Component {
  handleClickOrder() {
    this.props.history.push('/checkout');
  }

  render() {
    const checkoutStatus = this.props.cart.length === 0;
    let total = null;
    const itemRows = this.props.cart.map(cur => {
      total += cur.quantity * cur.price;
      return <CartSummaryItems key={cur.cartItemId} item={cur}/>;
    });
    return (
      <div className="container">
        <Link to={'/'}>
          <div className="pointer mb-2 text-muted">{'<  '}Back to catalog</div>
        </Link>
        <h2>My Cart</h2>
        <div>
          {itemRows}
        </div>
        <div className="d-flex justify-content-between mb-5">
          <h3>Item Total ${(total / 100).toFixed(2)}</h3>
          <button
            type="button"
            className="btn btn-primary"
            disabled={checkoutStatus}
            onClick={this.handleClickOrder.bind(this)}>Check Out
          </button>
        </div>
      </div>
    );
  }
}
