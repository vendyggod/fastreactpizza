import OrderItem from "./OrderItem";

function OrderItemList({ cart, menu }) {
  return (
    <ul className="divide-stone- divide-y border-b border-t">
      {cart.map((item) => (
        <OrderItem
          item={item}
          key={item.pizzaId}
          ingredients={menu?.find((el) => el.id === item.pizzaId).ingredients}
        />
      ))}
    </ul>
  );
}

export default OrderItemList;
