import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza
      </Link>

      <div className="flex items-center gap-3">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
