function showLogin(){
  document.getElementById('loading').hidden=true;
  document.getElementById('login').hidden=false;
}
// Google/Facebook: असली लॉगिन के लिए इंजन/SDK का कोड यहाँ जोड़ें
const providers={google:null,facebook:null};
document.getElementById('login').addEventListener('click',e=>{
  const name=e.target.dataset.provider;
  if(!name)return;
  const status=document.getElementById('status');
  if(name==='guest'){
    let id;
    try{id=localStorage.getItem('guestId')}catch(_){}
    id=id||'guest-'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
    try{localStorage.setItem('guestId',id)}catch(_){}
    enterLobby('Guest');
  }else if(providers[name])providers[name]();
  else status.textContent='यह लॉगिन अभी जोड़ा नहीं गया है';
});
// Google/Facebook का असली लॉगिन सफल होने पर enterLobby(नाम) बुलाएँ
