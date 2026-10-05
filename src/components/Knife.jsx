const teeth=' q-3.5 3.5 0 7'.repeat(16);
export default function Knife({style}){return(
<svg viewBox="0 0 60 262" style={{aspectRatio:'60/262',filter:'drop-shadow(6px 10px 8px rgba(0,0,0,.45))',...style}}>
 <defs>
  <linearGradient id="kb" x1="0" x2="1"><stop offset="0" stopColor="#8d99ab"/><stop offset=".3" stopColor="#f6f9fd"/><stop offset=".55" stopColor="#c5cedb"/><stop offset="1" stopColor="#6f7a8b"/></linearGradient>
  <linearGradient id="kh" x1="0" x2="1"><stop offset="0" stopColor="#1a0f0b"/><stop offset=".35" stopColor="#5a3a2a"/><stop offset="1" stopColor="#1a0f0b"/></linearGradient>
  <linearGradient id="kl" x1="0" x2="1"><stop offset="0" stopColor="#9aa5b5"/><stop offset=".5" stopColor="#fff"/><stop offset="1" stopColor="#8794a6"/></linearGradient>
 </defs>
 <rect x="18" y="2" width="24" height="68" rx="10" fill="url(#kh)"/><rect x="22" y="8" width="3" height="56" rx="1.5" fill="#fff" opacity=".18"/>
 {[16,36,56].map(y=><circle key={y} cx="30" cy={y} r="2.6" fill="#ffd479" stroke="#a87c1d" strokeWidth=".6"/>)}
 <rect x="14" y="67" width="32" height="10" rx="3" fill="url(#kl)" stroke="#6f7a8b" strokeWidth=".6"/>
 <path d="M16 77H46V208Q46 238 30 258Q17 236 16 208Z" fill="url(#kb)" stroke="#7d8898" strokeWidth=".8"/>
 <path d={'M46 92'+teeth} fill="none" stroke="#dfe6ef" strokeWidth="1.4"/>
 <path d="M24 82V236" stroke="#fff" strokeWidth="1.6" opacity=".7"/><path d="M33 82V200" stroke="#8794a6" strokeWidth=".8" opacity=".5"/>
</svg>)}
