import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../../store/slices/filterSlice"

const typeClass = [
  "bg-sky-600 border-2 border-sky-800 p-1 m-1 w-32 flex justify-center text-white rounded-md cursor-pointer",
  "bg-white border-2  p-1 m-1 w-32 flex justify-center text-black rounded-md cursor-pointer",
];

function Sort() {

    const dispatch = useDispatch();
    const sort = useSelector(state => state.filter.sort)

    const [switchSort, setSwitchSort] = useState(false);

    const orders = [
        { title: "popular +", sort: "rating", order: "desc" },
        { title: "popular -", sort: "rating", order: "asc" },
        { title: "name A-Z", sort: "name", order: "desc" },
        { title: "name Z-A", sort: "name", order: "asc" },
        { title: "price +", sort: "price", order: "desc" },
        { title: "price -", sort: "price", order: "asc" },
      ];
    
  const handleClickSort = (obj) => {
    dispatch(setSort(obj))
    setSwitchSort(!switchSort)
  }



  return (
   <>
    <article className="flex flex-col my-2 gap-2">
    <section className="flex justify-center gap-1">
      Sorted by:
      <button
        onClick={() => setSwitchSort(!switchSort)}
        className="text-sky-600 underline decoration-dotted"
      >
        {sort.title}
      </button>
    </section>
  </article>

{ switchSort &&
  <section className="flex justify-center">
    <ul className="grid grid-cols-2 grid-flow-row sm:grid-rows-2 sm:grid-flow-row gap-1 justify-items-center">
      {orders.map((order, id) => (
        <li
          key={id}
          className={sort.title === order.title ? typeClass[0] : typeClass[1]}
          onClick={() => handleClickSort(order)}
        >
          {order.title}
        </li>
      ))}
    </ul>
  </section>
  }
  </>
  )

}

export default Sort