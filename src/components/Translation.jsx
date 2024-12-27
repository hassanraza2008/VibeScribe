import React from "react";
import { LANGUAGES } from "../utils/presets";

export default function Translation(props) {
  const {
    textElement,
    toLanguage,
    translating,
    setToLanguage,
    generateTranslation 
  } = props;

  return (
    <>
      {(textElement && !translating) && (
        <p>{textElement}</p>
      )}
      {!translating && (<div className="flex flex-col gap-1 mb-4">
        <p className="text-xs sm:text-sm font-medium text-slate-500 mr-auto">To language</p>
        <div className="flex items-stretch gap-2">
          <select
            value={toLanguage}
            className="flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent hover:border-teal-300 duration-200 p-2 rounded"
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
          <button onClick={generateTranslation} className="specialBtn px-3 py-2 rounded-lg text-teal-300 hover:text-teal-600 duration-200">
            Translate
          </button>
        </div>
      </div>)}
    </>
  );
}
