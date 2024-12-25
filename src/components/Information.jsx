import React, { useState, useEffect, useRef } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information(props) {
  const { output } = props;
  const [tab, setTab] = useState("transcription")
  const [translation, setTranslation] = useState(null);
  const [toLanguage, setToLanguage] = useState('Select language');
  const [translating, setTranslating] = useState(null);

  const worker = useRef();

  useEffect(() => {
    if(!worker.current) {
      worker.current = new Worker(new URL('./utils/translate.worker.js', import.meta.url), {
        type: 'module'
      });
    }
    
    const onMessageReceivced = async (e) => {
      switch (e.data.type) {
        case 'initiate': 
          console.log('DOWNLOADING')
          break;
        case 'progress': 
          break;
        case 'update': 
          setTranslation(e.data.results)
          console.log(e.data.results)
          break;
        case 'complete': 
          setTranslating(false)
          console.log('DONE')
          break;
      }
    }

    worker.current.addEventListener('message', onMessageReceivced)

    return () => worker.current.removeEventListener('message', onMessageReceivced)
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(output);
  }

  function handleDownload() {
    const element = document.createElement('a');
    const file = new Blob([], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download(`VibeScribe_${(new Date()).toDateString()}.txt`);
    document.body.appendChild(element);
    element.click();
  }

  function generateTranslation() {
    if(translating || toLanguage === 'Select language') {
      return;
    }

    setTranslating(true);

    worker.current.postMessage({
      text: output.map(val => val.text),
      src_language: 'eng_latin',
      tgt_lang: toLanguage
    })
  }

  const textElement = tab === 'transcription' ? output.map(val => val.text) : '';

  return (
  <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 text-center justify-center pb-20 max-w-prose w-full mx-auto">
    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
      Your <span className="text-teal-500 bold">Transcription</span>
    </h1>

    <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center">
      <button onClick={() => setTab("transcription")} className={"px-4 duration-200 py-1 " + (tab === "transcription" ? ' bg-teal-400 text-white' : ' text-teal-400')}>Transcription</button>
      <button onClick={() => setTab("translation")} className={"px-4 duration-200 py-2 font-medium " + (tab === "translation" ? ' bg-teal-400 text-white' : ' text-teal-400')}>Translation</button>
    </div>
    <div className="my-8 flex flex-col">
      {tab === 'transcription' ? (
        <Transcription {...props} textElement={textElement}/>
      ) : (
        <Translation {...props} toLanguage={toLanguage} translating={translating} textElement={textElement} setTranslating={setTranslating} setTranslation={setTranslation} setToLanguage={setToLanguage} generateTranslation={generateTranslation}/>
      )}
    </div> 
    <div className="flex items-center gap-4 mx-auto">
      <button title="Copy" className="bg-white hover:text-teal-600 duration-200 text-teal-400 px-2 rounded aspect-square grid place-items-center">
        <i className="fa-solid fa-copy"></i>
      </button>
      <button title="Download" className="bg-white hover:text-teal-600 duration-200 text-teal-400 px-2 rounded aspect-square grid place-items-center">
        <i className="fa-solid fa-download"></i>
      </button>
    </div>
  </main>
  );
}
