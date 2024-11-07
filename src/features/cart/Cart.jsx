import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <div className="mb-5 mt-3 flex flex-col gap-5">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <h2 className="text-xl font-semibold">Your cart, Ruslan</h2>
      </div>

      <ul className="mb-10 divide-y divide-stone-200 border-b">
        {cart.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <Button type="clear">Clear cart</Button>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
}

export default Cart;
