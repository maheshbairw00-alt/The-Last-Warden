function enterLobby(name){
  document.querySelector('main').hidden=true;
  document.getElementById('lobby').hidden=false;
  document.getElementById('player').textContent=name;
}
document.getElementById('lobby').addEventListener('click',e=>{
  const item=e.target.id==='play'?'PLAY':e.target.dataset.menu;
  if(item)document.getElementById('note').textContent=item+' जल्द आएगा';
});
// 3D करेक्टर की लोडिंग की स्थिति
const hero=document.getElementById('hero');
const heroStatus=document.getElementById('hero-status');
hero.addEventListener('progress',e=>{
  if(!hero.loaded)heroStatus.textContent='करेक्टर लोड हो रहा है... '+Math.round(e.detail.totalProgress*100)+'%';
});
hero.addEventListener('load',()=>{heroStatus.hidden=true});
hero.addEventListener('error',()=>{heroStatus.hidden=false;heroStatus.textContent='करेक्टर लोड नहीं हुआ। पेज रिफ़्रेश करें।'});
// 3D टूल ही न खुले तो भी बताएँ
setTimeout(()=>{if(!customElements.get('model-viewer'))heroStatus.textContent='3D व्यूअर लोड नहीं हुआ। इंटरनेट जाँचकर रिफ़्रेश करें।'},20000);
