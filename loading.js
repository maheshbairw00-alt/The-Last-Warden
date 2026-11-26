// गेम इंजन से असली प्रगति मिलने पर setProgress(0-100) बुलाएँ
function setProgress(v){
  v=Math.max(0,Math.min(100,Math.round(v)));
  document.getElementById('fill').style.width=v+'%';
  document.getElementById('percent').textContent='Loading... '+v+'%';
  document.querySelector('.bar').setAttribute('aria-valuenow',v);
  if(v===100)showLogin();
}
// डेमो: असली गेम में यह हिस्सा हटा दें
function startLoading(){
  let p=0;const t=setInterval(()=>{setProgress(++p);if(p>=100)clearInterval(t)},60);
}
