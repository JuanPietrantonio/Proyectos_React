import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';


function ItemListContainer(props) {
  return (
    <div>
        <FlexWrapper>
          <Item title="Proteina" imgurl="/img/proteina.webp" price={1000} details="Lorem ipsum"> </Item>
          <Item title="Proteina 1" imgurl="/img/proteina1.webp" price={2000} details="Lorem ipsum"> </Item>
          <Item title="Creatina " imgurl="/img/ultraflex.webp" price={3000} details="Lorem ipsum"> </Item>
          <Item title="Creatina 1" imgurl="/img/creatina.webp" price={4000} details="Lorem ipsum"> </Item>
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer