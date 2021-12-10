export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payLoad;
      })
    };
  };
  // Clear Cart btn function bellow
  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] }
  };
  
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payLoad) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  };

  if (action.type === "DECREMENT") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payLoad) {
        return { ...curElem, quantity: curElem.quantity - 1 };
      }
      return curElem;
    }).filter((curElem) => curElem.quantity !==0 );
    return { ...state, item: updatedCart };
  };

  if (action.type === "GET-TOTAL") {
    let { totalItem, totalAmount} = state.item.reduce(
      (accum, curVal) => {
        const { price, quantity } = curVal;

        const updatedAmount =price*quantity;
        accum.totalAmount += updatedAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0
      }
    );
    return { ...state, totalItem, totalAmount};
  };

  return state;
};