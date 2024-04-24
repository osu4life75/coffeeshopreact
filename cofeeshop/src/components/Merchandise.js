import React from 'react'
import MerchandiseItems from './MerchandiseItems'

 function Merchandise(props) {
    console.log('merchandise', props)
    return (
        <div className="menu">
          <div className="row">
            <h3 className="col-12 p-1">Merchandise</h3>
          </div>
          
          <div className={'row container pb-2'} style={{margin: '0 auto'}}>
            {props.merchandiseItems.map(item => (
              <MerchandiseItems updateShoppingCart={(e) => {
                
                props.updateShoppingCart(e)
              } } key={item.id} item={item}/>
            ))}
          </div>
        </div>
      );
    }

    export default Merchandise;
    
