import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const hasItems = cartCTX.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={() => {
            cartCTX.addItem({ ...item, amount: 1 });
          }}
          onRemove={() => {
            cartCTX.removeItem(item.id);
          }}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCTX.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
