import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />

      {isLoading && <LoadingIndicator />}

      <main className="min-h-screen">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
