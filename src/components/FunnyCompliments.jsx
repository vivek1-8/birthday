import {motion} from 'framer-motion';import {burst} from '../fx.js';
const D=[['Age','21'],['Cuteness','Suspiciously high 👀'],['Attitude','Premium subscription 😂'],['Smile','Dangerous ❤️'],['Drama','Storage full 😭'],['Beauty','Unfortunately... still undefeated.'],['Patience',"We'll discuss that later 😂"],['',"21 years on Earth and somehow you still haven't figured out how to stop being this cute."]];
export default function FunnyCompliments({go}){return(<div className="in">
 <h2>21 Years of Being You 😂</h2>
 <div className="gr">{D.map(([a,b],i)=><motion.div key={i} className={'cd gl'+(i>6?' w':'')} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:i*.12}} whileTap={{scale:1.08,rotate:-3}}
  onClick={e=>burst(e.clientX,e.clientY,14,{s:4,g:.05,l:45})}>{a&&<b>{a}</b>}<span>{b}</span></motion.div>)}</div>
 <button className="btn" onClick={()=>go(3)}>Continue →</button></div>)}
