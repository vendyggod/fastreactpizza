import LinkButton from "./LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h3 className="mt-3">There is no pizza was added yet</h3>
    </div>
  );
}

export default EmptyCart;
