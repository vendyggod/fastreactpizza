import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-3 text-sm font-bold sm:gap-5">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="delete">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
