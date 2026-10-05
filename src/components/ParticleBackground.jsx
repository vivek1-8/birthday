import {useEffect} from 'react';
const AE=['💖','✨','🎈','💜','⭐','🎉'];
export default function ParticleBackground(){
 useEffect(()=>{const a=document.getElementById('amb');const t=setInterval(()=>{if(document.hidden)return;const e=document.createElement('span');e.textContent=AE[Math.random()*6|0];e.style.left=Math.random()*100+'%';e.style.fontSize=14+Math.random()*18+'px';e.style.animationDuration=7+Math.random()*6+'s';a.append(e);setTimeout(()=>e.remove(),13500)},650);return()=>clearInterval(t)},[]);
 return <div id="amb"/>}
