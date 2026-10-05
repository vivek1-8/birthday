// Cheerful synthesized Happy Birthday loop. To use your own track, swap this file's internals for an <audio> element.
const T=[[392,.75],[392,.25],[440,1],[392,1],[523.3,1],[493.9,2],[392,.75],[392,.25],[440,1],[392,1],[587.3,1],[523.3,2],[392,.75],[392,.25],[784,1],[659.3,1],[523.3,1],[493.9,1],[440,1],[698.5,.75],[698.5,.25],[659.3,1],[523.3,1],[587.3,1],[523.3,2]];
let ac,nt=0,ti=0,on=false;const subs=new Set();
export const subscribe=f=>{subs.add(f);return()=>subs.delete(f)};const set=v=>{on=v;subs.forEach(f=>f(v))};
function note(f,t,d){const o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d*.95);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d)}
function sched(){while(nt<ac.currentTime+2){const[f,d]=T[ti%25];note(f,nt,d*.4);if(ti%3==0)note(f/2,nt,d*.3);nt+=d*.4;ti++;if(ti%25==0)nt+=.5}}
export function startMusic(){if(!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return}nt=ac.currentTime+.1;setInterval(()=>ac.state=='running'&&sched(),400)}if(!on){ac.resume();set(true)}}
export function toggleMusic(){if(!ac||!on)startMusic();else{ac.suspend();set(false)}}
