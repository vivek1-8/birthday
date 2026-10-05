import c1 from '../assets/childhood/child1.jpg';import c2 from '../assets/childhood/child2.jpg';
export default function ChildhoodGallery({go}){return(<div className="in">
 <h2>Before the world knew how cute you were... 😂</h2>
 <div className="pl" style={{transform:'rotate(-4deg)'}}><img src={c1} alt="Little Payal"/><i>Tiny Payal detected... 😂</i></div>
 <div className="pl" style={{transform:'rotate(3.5deg)'}}><img src={c2} alt="Little Payal"/><i>Okay, the cuteness started early.</i></div>
 <div className="gl"><p>Evidence that the attitude was there from the beginning.<br/>Someone was already preparing for main-character status. 😎</p></div>
 <p>Plot twist: she grew up, but the cuteness refused to leave.</p>
 <button className="btn" onClick={()=>go(4)}>Continue →</button></div>)}
