import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
// import User from "../features/user/user";

export default function Header() {
  return (
    <header className=" flex w-full place-items-center  justify-between bg-yellow-300 px-2 py-3 uppercase md:grid md:grid-cols-[2fr_1fr_2fr] md:gap-4 md:px-4 md:py-4 lg:px-10">
      <div className=" text-md mr-8 hidden tracking-wider md:block md:justify-self-start">
        <Link to="/menu" className="mr-1 p-2 lg:mx-1">
          Menu
        </Link>
        <Link to="/order/new" className="mr-1 p-2 lg:mx-1">
          OrderNew
        </Link>
        <Link to="/cart" className=" mr-1 p-2 lg:mx-1">
          🛒
        </Link>
      </div>
      <Link
        to="/"
        className="mx-1 place-items-center p-2 text-xl font-semibold tracking-widest"
      >
        Hunger Begins..
        {/* <img src="logo.png" alt="" srcset="" className=" h-24" /> */}
      </Link>
      <div className="mr-2 flex items-center justify-end text-xl tracking-widest md:justify-self-end  ">
        <SearchOrder />

        <Username />
      </div>
    </header>
  );
}
