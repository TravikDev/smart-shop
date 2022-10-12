import React, { useState, useEffect } from "react";
import Items from "../components/body/Items";
import Categories from "../components/body/Items/Categories";
import Sort from "../components/body/Items/Sort";
import Preloader from "../components/body/Items/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../store/slices/filterSlice";

function Catalog() {
  
  const dispatch = useDispatch();
  const { categoryId, sort} = useSelector(state => state.filter);

  const [searchValue, setSearchValue] = useState('')
  const [filterSwitch, setFilterSwitch] = useState(false);
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const sortType = sort.sort;
  const sortOrder = sort.order;
  const LoaderArr = [...Array(6)]

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    
  fetch(`https://633c1bcdf11701a65f6effe5.mockapi.io/items?${category}&sortBy=${sortType}&order=${sortOrder}`)
    .then((res) => {return res.json()})
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    })
  }, [categoryId, sortType, sortOrder, searchValue])

    const searchFilter = items.filter(item => ( item.title.toLowerCase().includes(searchValue.toLowerCase()) ))
    
    const shop_items = searchFilter.map((item, i) => (
      <Items key={item.id} {...item} />))
   
    const handleClickCat = (id) => {
      dispatch(setCategoryId(id))
    }

  return (
    <>
      <article className="flex p-4 w-full">
        <section className="bg-white rounded-md p-4 dark:bg-gray-100 shadow-sm shadow-black w-full mx-auto">
          <section className="flex sm:justify-between flex-col-reverse sm:flex-row mb-2 justify-center">
            <section className="flex justify-between items-center sm:flex-row-reverse">
              <h1 className="text-2xl  ml-1 text-black">Products</h1>

              <button
                className="mr-1 text-black"
                onClick={() => setFilterSwitch(!filterSwitch)}
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
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </button>
            </section>
            <hr className="mt-4 mb-1 sm:hidden" />

            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-sky-800 dark:text-sky-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-2 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border-2 border-sky-800 focus:ring-white focus:border-white dark:border-sky-800 dark:placeholder-black dark:text-black text-placeholder dark:focus:ring-sky800 dark:focus:border-sky-800 hover:border-2"
                placeholder="Search"
                required
                autoFocus
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </section>

          

          {filterSwitch && (
            <div>
              <hr className="opacity-50 sm:block hidden mt-2" />
              <section className=" bg-white text-black border-2 rounded-md my-4 flex-col">
              <Categories 
                value={categoryId}
                onClickCat={handleClickCat}
                />
              <Sort />
              </section>
            </div>
          )}

          <hr className="sm:block hidden mb-2 mt-4" />

          <section className="sm:py-2 sm:my-2">
            <ul className="flex flex-row sm:flex-row justify-center flex-wrap gap-10">
              {
              isLoading ? LoaderArr.map((x, i) => (<Preloader key={i} />)) : shop_items
              }
            </ul>
          </section>

          <hr className="mt-4 mb-2" />
          <ul className="flex gap-2 flex-row justify-center items-center">
            <li className="bg-sky-600 rounded-full border-sky-800 text-white border-2 w-7 h-7 flex justify-center cursor-pointer">
              <p className="text-xl flex items-center justify-center">
                1
              </p>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}

export default Catalog;
