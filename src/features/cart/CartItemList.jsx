import CartItem from "./CartItem";

function CartItemList({ cart }) {
  return (
    <ul className="mb-10 divide-y divide-stone-200 border-b">
      {cart.map((item) => (
        <CartItem item={item} key={item.pizzaId} />
      ))}
    </ul>
  );
}

export default CartItemList;
