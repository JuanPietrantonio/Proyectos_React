import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';
import products from '../../data/products';


function ItemListContainer() {
  return (
    <div>
        <FlexWrapper>
          
          {products.map((product) => (
            <Item 
              key={product.id}
              title={product.title}
              imgurl={product.thumbnail}
              price={product.price} 
              details={product.description}
              stock={product.stock}
            />
          ))
          }
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer