import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart, decreaseCount} from "../../../store/slices/cartSlice"

function CartItem({id, title, price, count, type, position}) {

    const dispatch = useDispatch()

    const onPlus = () => {
        dispatch(addToCart({ id }),
        )
    }
    const onMinus = () => {
        dispatch(decreaseCount(id))
    }
    const onRemove = () => {
        dispatch(removeFromCart(id))
    }

  return (
    <article className="flex gap-5 flex-col sm:mx-20">
          <section className="bg-white border-2 border-slate-300 rounded-md py-2 pr-4 flex justify-between items-center text-lg">
            <section className="flex flex-row items-center relative">
              <img
                src={"./img/products/" + id + ".png"}
                width={100}
                height={100}
                className="m-2 ml-4 border-2 p-2 rounded-md border-slate-300"
              />
              <div className="font-medium absolute left-2 top-0 bg-white border-2 border-slate-300 px-2 rounded-md">
                {position + 1}
              </div>
              <section className="ml-2">
                <p>{title}</p>
                <p>Option: {type}</p>
                <p>Price: {price}$</p>
              </section>
            </section>
            <section className="flex gap-12 flex-col sm:flex-row">
              <section className="flex items-center">
                <button onClick={onMinus}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-sky-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <span className="mx-2 font-medium">{count}</span>
                <button onClick={onPlus}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-sky-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </section>
              <button onClick={onRemove} className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-sky-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </section>
          </section>

        </article>
  )
}

export default CartItem