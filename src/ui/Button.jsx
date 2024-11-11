import { Link } from "react-router-dom";

function Button({ children, onClick, disabled, to, type }) {
  const base =
    "rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round:
      "rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none px-2.5 py-1 md:px-3.5 md:py-2 text-sm disabled:cursor-not-allowed",
    delete:
      "rounded-full border-2 border-stone-300 px-2 py-1 text-xs capitalize text-stone-600 hover:border-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 md:text-sm",
    clear:
      "rounded-full border-2 border-stone-300 px-4 py-3 text-sm uppercase tracking-wide text-stone-500 transition-colors duration-200 hover:bg-stone-300 hover:text-stone-600 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
