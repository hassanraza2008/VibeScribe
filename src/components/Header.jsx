import React from "react";

export default function Header() {
  return (
    <header className="flex items-center p-4 justify-between gap-4">
      <h1 className="">
        Vibe<span className="text-teal-500">Scribe</span>
      </h1>
      <button className="flex items-center gap-2">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
