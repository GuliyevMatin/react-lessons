import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';
// import MyCustomComponent from './MyCustom';

function App() {
  return (
    <>
   <ReactHlsPlayer
    src="http://canli.naxcivantv.az/media/20220629/high/tv_high.m3u8"
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
    </>
  )
}

export default App;
