import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItemList from "./CartItemList";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <div className="mb-5 mt-3 flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Your cart, {username}</h2>
      </div>

      <CartItemList cart={cart} />

      <div className="flex items-center justify-between">
        <Button type="clear" onClick={handleClearCart}>
          Clear cart
        </Button>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
}

export default Cart;
