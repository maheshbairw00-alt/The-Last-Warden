// एक ही पेज है, इसलिए स्क्रीन बदलने पर म्यूज़िक नहीं रुकता
const music=document.getElementById('music');
music.volume=.6;
document.getElementById('start').addEventListener('click',e=>{
  e.target.hidden=true;
  music.play().catch(()=>{});
  startLoading();
});
document.getElementById('mute').addEventListener('click',e=>{
  music.muted=!music.muted;
  if(!music.muted)music.play().catch(()=>{});
  e.target.textContent=music.muted?'🔇 म्यूज़िक':'🔊 म्यूज़िक';
});
