import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const cartCTX = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      name: props.name,
      price: props.price,
      id: props.id,
      amount: 2, //  ----------------to be changed
    };
    cartCTX.addItem(newItem);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
