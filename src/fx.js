let c,cv,P=[];
export function initFx(canvas){cv=canvas;c=cv.getContext('2d');const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);let on=true;
(function lp(){if(!on)return;c.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.l>0);for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.l--;p.r+=.2;c.globalAlpha=Math.min(1,p.l/25);c.fillStyle=p.col;if(p.sq){c.save();c.translate(p.x,p.y);c.rotate(p.r);c.fillRect(-p.sz,-p.sz/2,p.sz*2,p.sz);c.restore()}else{c.beginPath();c.arc(p.x,p.y,p.sz,0,7);c.fill()}}requestAnimationFrame(lp)})();
return()=>{on=false;removeEventListener('resize',rs)}}
export function burst(x,y,n,o={}){for(let i=0;i<n;i++){const a=Math.random()*6.28,s=(o.s||6)*Math.random()+1;P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,g:o.g??.15,l:o.l||70,col:`hsl(${Math.random()*360},90%,65%)`,sz:o.sz||3,sq:o.sq,r:0})}}
export const confetti=()=>{for(let i=0;i<6;i++)setTimeout(()=>burst(innerWidth*Math.random(),-10,28,{s:3,g:.1,l:170,sz:5,sq:1}),i*160)};
export const fireworks=n=>{for(let i=0;i<n;i++)setTimeout(()=>burst(innerWidth*(.15+.7*Math.random()),innerHeight*(.12+.3*Math.random()),50,{s:5,g:.06,l:60}),i*380)};
export function balloons(){const a=document.getElementById('amb');if(!a)return;for(let i=0;i<14;i++){const e=document.createElement('span');e.textContent='🎈';e.style.left=Math.random()*95+'%';e.style.fontSize=30+Math.random()*26+'px';e.style.animationDuration=4+Math.random()*3+'s';e.style.animationDelay=Math.random()*1.2+'s';a.append(e);setTimeout(()=>e.remove(),9000)}}
