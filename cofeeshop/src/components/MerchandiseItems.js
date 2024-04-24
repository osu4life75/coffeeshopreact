import React from 'react'

export default function MerchandiseItems(props) {
    return (
      <div className="col-12 col-md-6 col-lg-4">
         <div  className="card">
              <img className={"card-img-top img-fluid h-100"} src={props.item.image} style={{borderBottom: '1px solid lightgray'}}/>
              <div className="card-body">
              <h5 className="card-title">{props.item.item}</h5>
              {/* <p className="card-text">Enjoy a cup of freshly brewed coffee.</p> */}
              <p className="card-text">Price: {props.item.price}</p>
              <button className="btn btn-primary" onClick={
                  
                  () => props.updateShoppingCart(props.item)
                  }>Add To Cart</button>
          </div>
         </div>
      </div>
  
    )
  }