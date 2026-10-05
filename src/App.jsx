import {useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';
import {confetti} from './fx.js';
import ParticleBackground from './components/ParticleBackground.jsx';import ConfettiEffect from './components/ConfettiEffect.jsx';import MusicPlayer from './components/MusicPlayer.jsx';
import BowAndArrow from './components/BowAndArrow.jsx';import BirthdayCake from './components/BirthdayCake.jsx';import FunnyCompliments from './components/FunnyCompliments.jsx';
import ChildhoodGallery from './components/ChildhoodGallery.jsx';import FamilyGallery from './components/FamilyGallery.jsx';import NewChapter from './components/NewChapter.jsx';import FinalMessage from './components/FinalMessage.jsx';
const scenes=[BowAndArrow,BirthdayCake,FunnyCompliments,ChildhoodGallery,FamilyGallery,NewChapter,FinalMessage];
export default function App(){
 const [n,setN]=useState(0);
 const go=i=>{setN(i);document.body.dataset.w=i===4?'warm':'';if(i===2||i===5)confetti()};
 const Sc=scenes[n];
 return(<>
  <ParticleBackground/><ConfettiEffect/><MusicPlayer/>
  <AnimatePresence mode="wait">
   <motion.section key={n} className="s on" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}} transition={{duration:.45}}><Sc go={go}/></motion.section>
  </AnimatePresence></>);
}
