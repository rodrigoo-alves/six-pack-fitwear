import React from 'react';
import '../style/Aside.css';

function Aside() {
  return (
    <aside
      className="
      aside
      flex
      flex-col
      bg-zinc-800
      w-48
    "
    >
      <h3
        className="
        text-green-400
        mt-8
        text-2xl
        pl-2
        "
      >
        Roupas
      </h3>
      <nav className="mt-8 pd-8 border-t-2 border-green-400 flex flex-col gap-2">
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        mt-6
        pl-2
        "
        >
          Roupas: Tamanho PP
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho P
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho M
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho G
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho GG
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho #
        </a>
        <a
          href="home"
          className="
        text-green-400
        hover:text-green-200
        pl-2
        "
        >
          Roupas: Tamanho #
        </a>
        <a
          href="home"
          className="
          text-green-400
          hover:text-green-200
          pl-2
          "
        >
          Roupas: Tamanho #
        </a>
      </nav>
    </aside>
  );
}

export default Aside;
