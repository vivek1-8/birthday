import p3 from '../assets/present/p3.jpg';import p8 from '../assets/present/p8.jpg';import p4 from '../assets/present/p4.jpg';import p9 from '../assets/present/p9.jpg';import p10 from '../assets/present/p10.jpg';import p11 from '../assets/present/p11.jpg';
import f1 from '../assets/family/f1.jpg';import f2 from '../assets/family/f2.jpg';
export default function FamilyGallery({go}){return(<div className="in">
 <h2>The beautiful person you became ❤️</h2>
 <div className="ms">{[p3,p8,p4,p9,p10,p11].map((s,i)=><img key={i} src={s} alt="Payal" loading="lazy"/>)}</div>
 <div className="gl"><p>Behind every beautiful person, there are people who have been there through every chapter.</p></div>
 <div className="fam"><div className="pl" style={{transform:'rotate(-2.5deg)'}}><img src={f1} alt="Payal with her mother"/></div><div className="pl" style={{transform:'rotate(2.5deg)'}}><img src={f2} alt="Payal with her father"/></div></div>
 <p>Some pictures aren't just pictures... they're home. ❤️</p>
 <button className="btn" onClick={()=>go(5)}>Continue →</button></div>)}
