import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from "../../../store/slices/cartSlice";

const btnSwitch = [
  "mb-2 flex border-2 border-opacity-80 rounded-md border-sky-800 hover:bg-sky-900 bg-white hover:text-white px-1 text-lg sm:text-sm",
  "mb-2 flex border-2 border-opacity-80 rounded-md border-sky-800 hover:bg-sky-900 bg-sky-600 text-white hover:text-white px-1 text-lg sm:text-sm",
];

function Items({ id, title, model, price, type, rating }) {

  const dispatch = useDispatch();
  const itemCart = useSelector((state) => state.cart.items.find((obj) => obj.id === id))

  const [activeBtn, setActiveBtn] = useState();

  const addedCount = itemCart ? itemCart.count : 0

  const arrStars = [...Array(5)];
  const typeMemory = ["64GB", "126GB", "512 GB", "1 TB"];


  const handleClickAddToCart = () => {
    const item = {
      id,
      title,
      price,
      type: typeMemory[activeBtn]
    }; 
    dispatch(addToCart(item))
  }

  return (
    <li className=" rounded-md shadow-md border-2 bg-white text-black mx-20 sm:mx-0">
      <img
        src={"/img/products/" + id + ".png"}
        width="300"
        height="300"
        alt="product"
        className="p-4"
      />
      <section className="flex justify-center gap-2 items-center mb-2 ">
        {arrStars.map((x, i) => (
          <div key={i} className="items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className={`w-7 h-7 ${rating > i ? 'text-sky-600 fill-sky-600' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        ))}
      </section>

      <button className="absolute top-2 left-2 hover:bg-sky-900 hover:text-white  border-2 rounded-md bg-white border-sky-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <section className="flex flex-col px-2 border-2 rounded-md  mx-1 mb-1">
        <div className="flex justify-between items-center p-1">
          <p className="text-lg">
            {title} {model}
          </p>
          <p className="text-lg">{price}$</p>
        </div>

        <hr className="mb-2 opacity-90" />

        <div className="flex justify-between items-center flex-row">
          <ul className="flex gap-2 text-sm">
            {type.map((type, i) => (
              <li key={i}>
                <button
                  onClick={() => setActiveBtn(i)}
                  className={i === activeBtn ? btnSwitch[1] : btnSwitch[0]}
                >
                  {typeMemory[type]}
                </button>
              </li>
            ))}
          </ul>

          <button 
          onClick={handleClickAddToCart}
          className="mb-2 flex items-center border-2 border-opacity-80 rounded-md border-sky-900 bg-sky-700 hover:bg-sky-900 text-white">
            { addedCount === 0 ? 
            (<p className="pl-1 text-lg sm:text-sm uppercase">Buy</p>)
             : 
            (<p className="pl-1 text-lg sm:text-sm uppercase pr-1">{addedCount} Added</p>)}
            { addedCount === 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 pr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>)}
          </button>
        </div>
      </section>
    </li>
  );
}

export default Items;
