import React, { useState } from "react";

const typeClass = [
  "bg-sky-600 text-white border-sky-800 border-2 p-1 m-1 w-32 flex justify-center rounded-md cursor-pointer",
  "bg-white text-black border-2  p-1 m-1 w-32 flex justify-center rounded-md cursor-pointer",
];

function Categories({value, onClickCat}) {

  const [switchCat, setSwitchCat] = useState(false);

  const categories = [
    "All",
    "Smartphones",
    "Notebooks",
    "Tablets",
    "Accessories",
    "Consumables",
  ];

  const handleClickCat = (id) => {
    onClickCat(id);
    setSwitchCat(!switchCat)
  }

  return (
    <>
      <article className="flex flex-col my-2 gap-2">
        <section className="flex justify-center gap-1">
          Category selected:
          <button
            onClick={() => setSwitchCat(!switchCat)}
            className="text-sky-600 underline decoration-dotted"
          >
            {categories[value]}
          </button>
        </section>
      </article>

      {switchCat &&
      <section className="flex justify-center">
        <ul className="grid grid-cols-2 grid-flow-row sm:grid-rows-2 sm:grid-flow-row gap-1 justify-items-center">
          {categories.map((cat, id) => (
            <li
              key={id}
              className={value === id ? typeClass[0] : typeClass[1]}
              onClick={() => handleClickCat(id)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </section>
      }
      </>
  );
}

export default Categories;
