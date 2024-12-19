import { useState, useEffect } from 'react'
import HomePage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay';
import Information from './components/Information';
import Transcribing from './components/Transcribing';

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {output ? (
          <Information/>
        ) : loading ? (
          <Transcribing/>
        ) : isAudioAvailable ? (
          <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={setAudioStream} />  
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream}/>
        )}
      </section>
      <footer></footer>
    </div>
  )
}

export default App
