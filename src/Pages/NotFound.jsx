import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (

    <article className="p-4 gap-4">
      <section className="bg-white flex flex-col gap-4 justify-start rounded-md p-4 dark:bg-gray-100 shadow-sm shadow-black mx-auto w-full"> 
      <h1 className="text-2xl  ml-1 text-black">Unknown Page</h1> 
        <hr className="opacity-50" />
        <div className="flex justify-between">
        <p className="text-black">Nothing found</p>
        <Link to="/"><button class="mb-2 flex border-2 border-opacity-80 rounded-md border-sky-800 hover:bg-sky-900 bg-sky-600 text-white hover:text-white px-1 text-lg sm:text-sm">Home Page</button></Link>
      </div>
      </section>

    </article>
  );
}

export default NotFound