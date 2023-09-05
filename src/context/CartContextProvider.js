import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = (prevState, action) => {
  let newItems;
  switch (action.type) {
    case "ADD":
      const isExisted = prevState.items.some(
        (item) => item.id === action.payLoad.id
      );

      if (isExisted) {
        newItems = prevState.items.map((item) => {
          if (item.id === action.payLoad.id) {
            item.amount += action.payLoad.amount;
          }
          return item;
        });
      } else {
        newItems = prevState.items.concat(action.payLoad);
      }
      break;

    case "REMOVE":
      newItems = prevState.items.reduce((accumulator, item) => {
        if (item.id === action.payLoad) {
          item.amount--;
          if (item.amount <= 0) return accumulator;
        }
        return [...accumulator, item];
      }, []);
      break;

    case "CLEAR":
      break;

    default:
      return prevState;
  }

  const newtotalAmount = newItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);

  return { items: newItems, totalAmount: newtotalAmount };
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", payLoad: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payLoad: id });
  };

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
