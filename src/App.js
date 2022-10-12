import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Catalog from "./Pages/Home";
import Account from "./Pages/Account";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

function App() {

  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 text-white">
      {/* ! HEADER ! */}
      <Header />
      <main className="max-w-4xl mx-auto flex justify-center flex-col">

        <Routes>
          <Route path="/last-shop" element={<Catalog />} />
          <Route path="/cart" element={<Cart /> } />
          <Route path="/account" element={<Account /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
//
