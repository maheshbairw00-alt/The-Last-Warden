function enterLobby(name){
  document.querySelector('main').hidden=true;
  document.getElementById('lobby').hidden=false;
  document.getElementById('player').textContent=name;
}
document.getElementById('lobby').addEventListener('click',e=>{
  const item=e.target.id==='play'?'PLAY':e.target.dataset.menu;
  if(item)document.getElementById('note').textContent=item+' जल्द आएगा';
});
