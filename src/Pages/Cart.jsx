import React from "react";
import {useSelector} from "react-redux"
import CartItem from "../components/body/Items/CartItem";

function Cart() {

  const cart = useSelector(state => state.cart)

  return (
    <article className="p-4 gap-4">
      <section className="bg-white flex flex-col gap-4 justify-start rounded-md p-4 dark:bg-gray-100 shadow-sm shadow-black mx-auto w-full text-black">
        <h1 className="text-2xl  ml-1">Cart</h1>

        <hr className="opacity-50 mt-2" />
        { cart.items.length < 1 && <p className="flex justify-center">Your cart is empty now</p> }
        {
          
          cart.items.map((item,position) => <CartItem key={item.id} position={position} {...item} />)

        }
        <section className="sm:mx-20 bg-white border-2 border-slate-300 rounded-md flex justify-between items-center text-lg">
            <p className="text-xl m-2 uppercase">Total: {cart.total}$</p>
            <button className="m-2 flex items-center border-2 border-opacity-80 rounded-md border-sky-900 bg-sky-700 hover:bg-sky-900 text-white">
              <p className="pl-1 text-lg uppercase">Check out</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </section>
      </section>
    </article>
  );
}

export default Cart;
