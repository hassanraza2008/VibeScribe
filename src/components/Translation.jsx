import React from "react";
import { LANGUAGES } from "../utils/presets";

export default function Translation(props) {
  const {
    translation,
    textElement,
    toLanguage,
    translating,
    setTranslation,
    setTranslating,
    setToLanguage,
  } = props;

  return (
    <div className="flex flex-col gap-2 max-w-[400px] w-full mx-auto">
      <div className="flex flex-col gap-1">
        <p className="text-xs sm:text-sm font-medium text-slate-500 mr-auto">To language</p>
        <div className="flex items-stretch gap-2">
          <select
            value={toLanguage}
            className="flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent hover:border-blue-300 duration-200 p-2 rounded"
            onChange={(e) => setToLanguage(e.target.value)}
          >
            <option value={"Select language"}>Select language</option>
            {Object.entries(LANGUAGES).map(([key, value]) => {
              return (
                <option key={key} value={value}>
                  {key}
                </option>
              );
            })}
          </select>
          <button className="specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200">
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}
