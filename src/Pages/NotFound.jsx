import React from 'react'

function NotFound() {
  return (

    <article className="p-4 gap-4">
      <section className="bg-white flex flex-col gap-4 justify-start rounded-md p-4 dark:bg-gray-100 shadow-sm shadow-black mx-auto w-full"> 
      <h1 className="text-2xl  ml-1 text-black">Unknown Page</h1> 
        <hr className="opacity-50" />
        <p className="text-black">Nothing found</p>
      </section>

    </article>
  );
}

export default NotFound