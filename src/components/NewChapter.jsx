import {useMemo} from 'react';
function skyline(){const o=[];let x=0,i=0;while(x<400){const w=18+(i*13%22),ht=40+(i*37%80);o.push(<rect key={'b'+i} x={x} y={140-ht} width={w} height={ht} fill="url(#sg)" stroke="#8b5cf655" strokeWidth=".6"/>);for(let y=140-ht+6;y<132;y+=9)for(let z=x+3;z<x+w-3;z+=6)if((z*7+y*3+i)%5<2)o.push(<rect key={`w${i}-${z}-${y}`} x={z} y={y} width="2.5" height="3.5" fill={(z+y)%3?'#ffd479':'#7de0ff'} opacity=".85"/>);x+=w+2;i++}return o}
const d=i=>({animationDelay:.2+i*.7+'s'});
export default function NewChapter({go}){const sk=useMemo(skyline,[]);return(<>
 <svg className="sk" viewBox="0 0 400 140" preserveAspectRatio="none"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b1b5a"/><stop offset="1" stopColor="#0b0618"/></linearGradient></defs>{sk}</svg>
 <div className="in st relative z-[2]">
  <h2 style={d(0)}>And now... a new chapter begins. ✨</h2>
  <p style={{fontSize:22,...d(1)}}>A new city.<br/>New people.<br/>New experiences.<br/>A whole new journey.</p>
  <p style={d(2)}>Bengaluru is going to bring a lot of new things into your life...</p>
  <div className="gl" style={d(3)}><p>And whenever you need someone — for a stupid conversation, a bad day, a random laugh, or simply someone to listen... I'll be there.</p></div>
  <p style={d(4)}><b>You don't have to figure everything out alone.</b></p>
  <button className="btn" style={d(5)} onClick={()=>go(6)}>One Last Thing ❤️</button></div></>)}
