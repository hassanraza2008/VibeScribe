import React, { useState } from "react";

export default function Information() {
  const [tab, setTab] = useState("transcription")

  return (
  <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 text-center justify-center pb-20 max-w-prose w-full mx-auto">
    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
      Your <span className="text-teal-500 bold">Transcription</span>
    </h1>

    <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center">
      <button onClick={() => setTab("transcription")} className={"px-4 duration-200 py-2 font-medium " + (tab === "transcription" ? ' bg-teal-500 text-white' : ' text-teal-400')}>Transcription</button>
      <button onClick={() => setTab("translation")} className={"px-4 duration-200 py-2 font-medium " + (tab === "translation" ? ' bg-teal-500 text-white' : ' text-teal-400')}>Translation</button>
    </div>
  </main>
  );
}
