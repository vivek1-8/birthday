import {useEffect,useRef,useState} from 'react';import {motion} from 'framer-motion';
import FloatingBalloons from './FloatingBalloons.jsx';import {burst,confetti} from '../fx.js';import {startMusic} from '../music.js';
export default function BowAndArrow({go}){
 const st=useRef(),bow=useRef(),ar=useRef(),tb=useRef(),bs=useRef(),av=useRef({a:0,d:0}),shot=useRef(false);
 const [hint,setHint]=useState(true),[rev,setRev]=useState(false);
 const ctr=e=>{const r=e.getBoundingClientRect(),s=st.current.getBoundingClientRect();return[r.left+r.width/2-s.left,r.top+r.height/2-s.top]};
 const aim=()=>{if(shot.current)return;const[bx,by]=ctr(bow.current),[tx,ty]=ctr(tb.current),a=Math.atan2(ty-by,tx-bx);bow.current.style.rotate=a*180/Math.PI+'deg';ar.current.style.left=bx+'px';ar.current.style.top=by-6+'px';ar.current.style.transform=`rotate(${a}rad)`;av.current={a,d:Math.hypot(tx-bx,ty-by)}};
 useEffect(()=>{const t=setTimeout(aim,600);aim();addEventListener('resize',aim);return()=>{clearTimeout(t);removeEventListener('resize',aim)}},[]);
 const shoot=()=>{if(shot.current)return;shot.current=true;startMusic();setHint(false);const bw=bow.current,A=ar.current,B=tb.current;
  const[bx,by]=ctr(bw),[tx,ty]=ctr(B),a=Math.atan2(ty-by,tx-bx),d=Math.hypot(tx-bx,ty-by)-80;bw.style.animation='none';bw.style.rotate=a*180/Math.PI+'deg';A.style.left=bx+'px';A.style.top=by-6+'px';
  bs.current.setAttribute('d','M30 6L6 60L30 114');const cx=Math.cos(a),sy=Math.sin(a);
  A.animate([{transform:`translate(0,0) rotate(${a}rad)`},{transform:`translate(${-14*cx}px,${-14*sy}px) rotate(${a}rad)`}],{duration:450,fill:'forwards'}).onfinish=()=>{
   bs.current.setAttribute('d','M30 6L30 114');
   A.animate([{transform:`translate(${-14*cx}px,${-14*sy}px) rotate(${a}rad)`},{transform:`translate(${d*cx}px,${d*sy}px) rotate(${a}rad)`}],{duration:650,easing:'ease-in',fill:'forwards'}).onfinish=()=>{
    const r=B.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;B.style.display='none';A.style.display='none';
    burst(x,y,40,{s:6,g:.12,sz:3});burst(x,y,30,{s:5,g:.1,l:120,sz:5,sq:1});confetti();setTimeout(()=>setRev(true),500)}}};
 return(<div id="st" ref={st}>
  <div className="in" style={{position:'absolute',inset:0,height:'auto',minHeight:0,justifyContent:'flex-start',gap:12,paddingTop:6}}>
   <h2>Today is 6th October...<br/>My special person's birthday ❤️</h2><p>{hint?'Tap the bow to begin 🎯':'\u00a0'}</p></div>
  <FloatingBalloons/>
  <div className="bl" ref={tb} style={{left:'76%',top:'22%',color:'#ff4fa3',background:'linear-gradient(135deg,#ff4fa3,#ff9ac9)'}}/>
  <svg id="bow" ref={bow} viewBox="0 0 60 120" onClick={shoot}><path d="M30 6Q72 60 30 114" fill="none" stroke="#ffd479" strokeWidth="5" strokeLinecap="round"/><path ref={bs} d="M30 6L30 114" stroke="#fff" strokeWidth="1.6" fill="none"/></svg>
  <svg id="ar" ref={ar} viewBox="0 0 80 12"><path d="M0 6H72" stroke="#fff" strokeWidth="2.5"/><path d="M80 6L68 1V11Z" fill="#ffd479"/><path d="M0 6L0 1M6 6L2 1M0 6L0 11M6 6L2 11" stroke="#ff4fa3" strokeWidth="2.5"/></svg>
  {rev&&<motion.div id="rv" className="gl" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.9}} style={{display:'flex',inset:'auto 4% 12% 4%',padding:24}}>
   <h1>HAPPY 21ST BIRTHDAY, BETUU! 🎂❤️</h1><p>Okay, let's celebrate! 🎉</p><button className="btn" onClick={()=>go(1)}>Let's Go →</button></motion.div>}
 </div>)}
