import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="flex flex-col">
          <span className="font-bold">
            {quantity}&times; {name}
          </span>
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {ingredients?.join(", ") || "Loading..."}
      </p>
    </li>
  );
}

export default OrderItem;
