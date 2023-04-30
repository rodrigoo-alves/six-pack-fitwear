import React from 'react';
import { Home } from 'lucide-react';

function Header() {
  return (
    <header
      className="
    flex
    justify-between
    items-center
    bg-zinc-800
    h-24"
    >
      <button
        type="button"
        className="
        flex
        ml-8
        text-green-400
        text-xl
      "
      >
        <Home className="mr-3" />
        Home
      </button>
      <h1
        className="
        text-green-400
        text-4xl
      "
      >
        Six Pack FitWear
      </h1>
      <form>
        <label>
          <input
            type="text"
            className="
          border-green-400
          active:bg-green-400
          focus:outline-none
          mr-16
          pl-3
          rounded-lg
          border-2
          "
            placeholder="Pesquisar"
          />
        </label>
      </form>
    </header>
  );
}

export default Header;
