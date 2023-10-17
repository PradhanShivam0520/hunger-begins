import React from "react";
// import Header from "./header";
import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import Header from "./Header";

export default function AppLayout() {
  const loader = useNavigation();
  const isLoading = loader.state === "loading";

  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading ? <Loader /> : ""}
      <main className="mx-auto w-full max-w-6xl sm:w-4/5 ">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
