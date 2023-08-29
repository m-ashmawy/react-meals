import React, { useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/CartContext";

function HeaderCartButton() {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <button className={classes.button} onClick={showCartHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
