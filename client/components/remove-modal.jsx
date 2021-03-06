import React from 'react';

export default class RemoveModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="removemodal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Are you sure you want to remove this item from your cart?
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                data-dismiss='modal'>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <img src={this.props.removeItem.image} className="col-5 remove-items"/>
                <div className="col-7">
                  <div>{this.props.removeItem.name}</div>
                  <label className="text-muted">${(this.props.removeItem.price / 100).toFixed(2)}</label>
                  <p>{this.props.removeItem.shortDescription}</p>
                  <div>Item Quantity: {this.props.removeItem.quantity}</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss='modal'
                onClick={() => this.props.deleteItem(
                  { cartItemId: this.props.removeItem.cartItemId }
                )}>Remove
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                data-dismiss='modal'>Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
