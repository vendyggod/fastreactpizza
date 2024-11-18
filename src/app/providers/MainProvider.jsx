import { store } from "../stores/store";
import { Provider } from "react-redux";

export function MainProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
