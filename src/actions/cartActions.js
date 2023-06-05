export const addToCart = (product,items) => {
  console.log("addToCart",product,items);
  const index = items.findIndex((it)=>it?.id === product?.id)
  console.log(index);
  return {
    type: 'ADD_TO_CART',
    payload: index===-1 ? [...items,{...product,count: 1}]:items.map((it)=>{
      if(product.id === it.id){
        return {...product,count: it.count+1}
      }
      return it;
    }),
  };
};

export const removeFromCart = (id,items) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload:items.map((it)=>{
      if(it.id===id){
        return {...it,count:it.count-1}
      }
      return it;
    }),
  };
};
export const removeFromCart1 = (id, items) => {
  const newItems = items.filter((item) => item.id !== id);

  return {
    type: "REMOVE_FROM_CART",
    payload: newItems,
  };
};


export const increaseQuantity = (itemId, cartItems) => {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: { itemId, cartItems }
  };
};

export const decrementQuantity = (productId) => {
  return { type: 'DECREMENT_QUANTITY', payload: productId };
};


export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
