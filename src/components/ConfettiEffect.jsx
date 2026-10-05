import {useEffect,useRef} from 'react';import {initFx} from '../fx.js';
export default function ConfettiEffect(){const r=useRef();useEffect(()=>initFx(r.current),[]);return <canvas id="fx" ref={r}/>}
