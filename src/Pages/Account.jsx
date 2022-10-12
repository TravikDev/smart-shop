import React from "react";

function Account() {
  return (
    <article className="p-4 gap-4">
      <section className="bg-white flex flex-col sm:flex-row gap-4 justify-start rounded-md p-4 dark:bg-gray-100 shadow-sm shadow-black mx-auto w-full">
        <div>
          <h1 className="text-2xl  ml-1 text-black">Login</h1>
        
        <hr className="opacity-50 mt-2" />
        <section className=" bg-white text-black border-2 rounded-md my-4 pb-4 h-5/6">
          <article className="p-4  flex justify-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.2}
              stroke="currentColor"
              className="w-48 h-48 text-sky-800 fill-sky-600 rounded-full m-4 ring-2 ring-sky-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <section>
              <section className="flex flex-col mb-1">
                <label className="text-lg">Login:</label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7  text-sky-800 dark:text-sky-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="test"
                    className="block p-2 pl-10 w-full text-gray-900 bg-white rounded-lg border-2 border-sky-800 focus:ring-white focus:border-white dark:border-sky-800 dark:placeolder-sky-600 dark:text-black dark:focus:ring-sky800 dark:focus:border-sky-800 hover:border-2"
                    placeholder="Login"
                    required
                    autoFocus
                  />
                </div>
              </section>

              <section className="flex flex-col mb-1">
                <label className="text-lg">Password:</label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 text-sky-800 dark:text-sky-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="block p-2 pl-10 w-full text-gray-900 bg-white rounded-lg border-2 border-sky-800 focus:ring-white focus:border-white dark:border-sky-800 dark:placeholder-sky-600 dark:text-black dark:focus:ring-sky800 dark:focus:border-sky-800 hover:border-2"
                    placeholder="Password"
                    required
                  />
                </div>
              </section>
              <section>
              <button className="mt-2 flex items-center border-2 border-opacity-80 rounded-md border-sky-900 bg-sky-700 hover:bg-sky-900 text-white">
                <p className="px-2 text-lg sm:-mt-1 sm:p-1 sm:text-base uppercase">
                  Submit
                </p>
              </button>
              </section>
            </section>
          </article>
        </section>
      </div>

        <div className="w-full"><h1 className="text-2xl  ml-1 text-black">Registration</h1>
        {/* <div className="flex items-center bg-white ring-2 ring-sky-900 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-sky-800 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg> */}
      
      <hr className="opacity-50 mt-2" />
      <section className=" bg-white text-black border-2 rounded-md my-4 h-5/6">
        <article className="p-4 flex justify-center flex-col">
            Registration Form
        </article>
        </section>
      </div>  
      

      </section>

    </article>
  );
}

export default Account;
