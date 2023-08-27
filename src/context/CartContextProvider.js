import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  const contextValue = {
    items: [],
    totalAmount: 0,
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
