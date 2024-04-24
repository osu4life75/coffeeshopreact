import React from 'react'


export default function CartModal(props) {
    
  return (
    
    <div className="modal" tabIndex="-1" role="dialog" id='cartModal'>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Shopping Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          
        </button>
      </div>
      <div className="modal-body">
            {props.shoppingCart && props.shoppingCart.length > 0 ? (
              props.shoppingCart.map(cartItem => (
                <p key={cartItem.id}>{`${cartItem.item}-$${cartItem.price}`}</p>
              ))
            ) : (
              <p>You have no items in the cart</p>
            )}
          </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Go To Checkout</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}
