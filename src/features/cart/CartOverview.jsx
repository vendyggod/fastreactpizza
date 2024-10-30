import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="sticky bottom-3 m-3 flex items-center justify-between rounded-xl bg-stone-700 p-5 uppercase text-stone-200 sm:text-lg">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
