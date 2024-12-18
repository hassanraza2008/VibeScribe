import React from 'react'

export default function HomePage() {
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 text-center justify-center pb-20'>
        <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Vibe<span className='text-teal-500 bold'>Scribe</span></h1>
        <h3 className='font-medium md:text-lg '>
            Record <span className='text-teal-400'>&rarr;</span> Transcribe <span className='text-teal-400'>&rarr;</span> Translate <span className='text-teal-400'>&rarr;</span>
        </h3>
        <button className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
            <p className='text-teal-400'>Record</p>
            <i className="fa-solid fa-microphone"></i>
        </button>
        <p className='text-base'>Or <label className='text-teal-300 cursor-pointer hover:text-teal-500 duration-200'>upload <input className='hidden' type='file' accept='.mp3, .wav' /></label> a mp3 file</p>
        <p className='italic text-slate-500'>Free now free forever</p>
    </main>
  )
}
