import {useState} from 'react';import {motion,useAnimation} from 'framer-motion';
import Knife from './Knife.jsx';import {burst,confetti,fireworks,balloons} from '../fx.js';import {startMusic} from '../music.js';
const X=[];for(let i=0;i<11;i++)X.push([78+i*14.4,100]);for(let i=0;i<5;i++){X.push([26+i*9,150]);X.push([238+i*9,150])}
export default function BirthdayCake({go}){
 const [ph,setPh]=useState(0),k=useAnimation();
 const cut=async()=>{startMusic();setPh(1);
  await k.start({y:'-8%',rotate:0,opacity:1,transition:{duration:.85,ease:'easeOut'}});
  await k.start({y:'22%',x:[0,-6,6,-5,5,0],transition:{duration:1.2,ease:'easeInOut'}});
  setPh(2);confetti();balloons();fireworks(6);for(let i=0;i<5;i++)setTimeout(()=>burst(innerWidth/2,innerHeight/2,20,{s:4,g:-.03,l:90,sz:4}),i*250);
  await k.start({y:'-150%',rotate:-6,opacity:0,transition:{duration:.9,ease:'easeIn'}});setPh(3)};
 return(<div className="in">
  <p style={{fontSize:22}}>Make a wish... ✨</p>
  <div className="relative" style={{width:'min(88vw,380px)'}}>
   <svg id="cake" className={ph>=2?'lit':''} viewBox="0 0 300 250" width="100%">
    <defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7ab8"/><stop offset="1" stopColor="#c2338a"/></linearGradient><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b58cff"/><stop offset="1" stopColor="#6d3fd1"/></linearGradient></defs>
    <ellipse cx="150" cy="232" rx="142" ry="12" fill="#ffffff2a"/>
    <rect x="20" y="150" width="260" height="76" rx="14" fill="url(#a)"/><rect x="70" y="100" width="160" height="52" rx="12" fill="url(#c)"/>
    <motion.polygon points="150,152 205,152 205,226 150,226" fill="#ffb3d6" initial={{opacity:0,x:0,y:0}} animate={ph>=2?{opacity:1,x:60,y:26}:{opacity:0,x:0,y:0}} transition={{duration:.9}}/>
    <path d="M20 158q16 16 32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0" fill="#fff"/><path d="M70 108q16 14 32 0t32 0t32 0t32 0t32 0" fill="#fff"/>
    <text x="150" y="141" textAnchor="middle" fontFamily="Pacifico,cursive" fontSize="34" fill="#ffd479" stroke="#fff" strokeWidth=".8">21</text>
    <text x="150" y="203" textAnchor="middle" fontFamily="Pacifico,cursive" fontSize="32" fill="#fff">PAYAL</text>
    <g>{X.map(([x,y],i)=><g key={i}><rect x={x-2} y={y-20} width="4" height="20" rx="1.5" fill={i%2?'#ffd479':'#7de0ff'}/><ellipse className="fm" style={{animationDelay:i*.07+'s'}} cx={x} cy={y-25} rx="2.8" ry="5.5" fill="#ffb347"/></g>)}</g>
   </svg>
   <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none z-10" style={{height:'74%'}}>
    <motion.div animate={k} initial={{y:'-150%',rotate:-6,opacity:0}} style={{height:'100%'}}><Knife style={{height:'100%',width:'auto'}}/></motion.div>
   </div>
  </div>
  {ph===0&&<button className="btn" style={{fontSize:22,padding:'16px 34px'}} onClick={cut}>Cut the Cake 🎂</button>}
  {ph===3&&<motion.div className="flex flex-col items-center gap-3.5" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.9}}>
   <h1>Okayyy... officially 21 now! 😌🎉</h1><p>Let the birthday chaos begin 😂</p><button className="btn" onClick={()=>go(2)}>Next →</button></motion.div>}
 </div>)}
