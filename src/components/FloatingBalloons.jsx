const B=[['8%','38%','#ff4fa3',0],['30%','30%','#8b5cf6',-1],['48%','46%','#38bdf8',-2],['66%','34%','#ffd479',-.5]];
export default function FloatingBalloons(){return B.map(([l,t,c,d],i)=><div key={i} className="bl" style={{left:l,top:t,color:c,background:c,animationDelay:d+'s'}}/>)}
