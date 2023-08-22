import React, { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
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
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
