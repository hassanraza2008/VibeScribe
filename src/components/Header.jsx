import React from "react";

export default function Header() {
  return (
    <header className="flex items-center p-4 justify-between gap-4">
      <a href="/"><h1 className="font-medium">
        Vibe<span className="text-teal-500 bold">Scribe</span>
      </h1></a>
      <a href="/" className="flex items-center gap-2 specialBtn px-3 text-sm py-2 rounded-lg text-teal-400">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
}
