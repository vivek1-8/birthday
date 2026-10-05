import {useEffect,useState} from 'react';import {subscribe,toggleMusic} from '../music.js';
export default function MusicPlayer(){const [on,setOn]=useState(false);useEffect(()=>subscribe(setOn),[]);
 return <button id="mu" aria-label="Play or pause music" onClick={toggleMusic}>{on?'🔊':'🔇'}</button>}
