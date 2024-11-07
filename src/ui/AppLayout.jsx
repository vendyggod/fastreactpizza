import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <div
        className={`layout grid h-screen grid-rows-[auto_1fr] ${isLoading && "blur-sm"}`}
      >
        <Header />

        <div>
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>

        <CartOverview />
      </div>
    </>
  );
}

export default AppLayout;
