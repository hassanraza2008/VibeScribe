import React, { useState, useRef, useEffect } from 'react'

export default function HomePage(props) {
  const { setAudioStream, setFile } = props;
  
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);

  const mediaRecorder = useRef(null);

  const mimeType = 'audio/webm';

  async function startRecording() {
    let tempStream;

    console.log('Start Recording');

    try {
      const streamData = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      tempStream = streamData;
    } catch (err) {
      console.log(err.message);
      return
    }

    // create new Media Recorder instance using the stream
    const media = new MediaRecorder(tempStream, { type: mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') { return };
      if (event.data.size === 0) { return };

      localAudioChunks.push(event.data);
    }
    setAudioChunks(localAudioChunks);
  }

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
        <p className='text-base'>Or <label className='text-teal-300 cursor-pointer hover:text-teal-500 duration-200'>upload <input onChange={(e) => {
            const tempFile = e.target.files[0];
            setFile(tempFile);
        }} className='hidden' type='file' accept='.mp3, .wav' /></label> a mp3 file</p>
        <p className='italic text-slate-400'>Free now free forever</p>
    </main>
  )
}
