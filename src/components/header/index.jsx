import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function Header() {
  
  const items = useSelector(state => state.cart.items)

  const [menuSwitch, setMenuSwitch] = useState(false);

  const handleMenuSwitch = () => setMenuSwitch(!menuSwitch)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <>
      <header className="bg-sky-600 top-0 z-10 sticky w-full text-white dark:bg-sky-800  border-b-2 border-slate-400 border-opacity-50">
        <section className="flex max-w-4xl mx-auto justify-between"><div className="flex items-center">
          {/* HEADER: LEFT BLOCK - MENU */}

          {!menuSwitch ? (
            <button
              className="my-3 ml-3 hover:opacity-80"
              onClick={() => handleMenuSwitch()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          ) : (
            <button
              className="my-3 ml-3 hover:opacity-80"
              onClick={() => handleMenuSwitch()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <p className="mx-2 text-lg uppercase">

            <Link to="/">Smart-shop</Link></p></div>
          {/* HEADER: RIGHT BLOCK - CART */}
          <section className="flex">
            <Link to="/cart">
              <section className="my-3 mr-3 cursor-pointer hover:opacity-80 relative">
              { totalCount !== 0 && (<div className="bg-white text-black rounded-xl ring-2 ring-sky-600  flex justify-center items-center text-xs px-1 absolute top-3 right-3">
                <span className="text-xs">{totalCount}</span>
              </div>)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </section>
            </Link>

            <Link to="/account">
            <section className=" relative my-3 mr-3 cursor-pointer hover:opacity-80">
              <div className="bg-white text-black rounded-xl ring-2 ring-sky-600  flex justify-center items-center text-xs px-1 absolute top-3 right-3">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </section>
            </Link>
          </section>
        </section>
      </header>
      {menuSwitch ? <LeftMenu /> : ""}
      {/* OVERLAY - ACTIVE MENU
    <div className="bg-black h-full w-full opacity-50 fixed block z-6" /> */}
    </>
  );
}

export default Header;
