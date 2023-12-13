import React from 'react';

const CartItem = ({item}) => {
  const{is, title, image, price, amount} = item;
  return(
  <div className= 'flex' >
<div className='w-full min-h-[150px] flex items-center gap-x-4'>
  <div>
    <img className= 'max-w-[80px]' src={image} alt="" />
  </div>
</div>


  </div>
  )
};

export default CartItem;
