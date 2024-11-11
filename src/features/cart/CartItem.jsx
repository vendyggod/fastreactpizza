import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-3 text-sm font-bold sm:gap-5">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId} />
        <Button type="delete" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
