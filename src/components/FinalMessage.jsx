import {useEffect,useState} from 'react';import {confetti,fireworks} from '../fx.js';
export default function FinalMessage(){
 const [n,setN]=useState(0);const N=7;
 useEffect(()=>{const t=[];for(let i=0;i<N;i++)t.push(setTimeout(()=>setN(i+1),500+i*1800));t.push(setTimeout(()=>{fireworks(8);confetti()},500+N*1800-1500));const iv=setInterval(()=>fireworks(2),4000);return()=>{t.forEach(clearTimeout);clearInterval(iv)}},[]);
 const c=i=>'ln'+(n>i?' v':'');
 return(<div className="in">
  <h2 className={c(0)}>One last thing, Payal...</h2>
  <p className={c(1)}>Wherever life takes you, whatever changes, and however far Bengaluru feels sometimes, just remember that there will always be someone cheering for you.</p>
  <p className={c(2)}>Whenever you need someone, I'll be there.</p>
  <p className={c(3)}>I'll always wish the best for you,<br/>I'll always care about you,<br/>and I'll always love you.</p>
  <h1 className={c(4)}>HAPPY 21ST BIRTHDAY, BETUU ❤️</h1>
  <p className={c(5)}>Keep smiling.<br/>Keep growing.<br/>And go make this new chapter yours. ✨</p>
  <p className={c(6)+' sg'}>— Vivek</p></div>)}
