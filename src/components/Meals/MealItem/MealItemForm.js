import { useContext, useRef, useState } from "react";
import CartContext from "../../../context/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();
  const cartCTX = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputRef.current.value.trim().length === 0) return;
    // if (inputRef.current.value.trim().length === 0) {
    //   setAmountIsValid(false);
    //   return;
    // }
    // setAmountIsValid(true);

    const newItem = {
      name: props.name,
      price: props.price,
      id: props.id,
      amount: +inputRef.current.value,
    };
    cartCTX.addItem(newItem);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
    </form>
  );
}

export default MealItemForm;
