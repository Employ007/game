let dragindex = 0;
let dropindex = 0;
let clone = "";
let cli=0;
let mi=0;


let but = document.getElementById('button')
let start =document.getElementById('button1')
let done = document.getElementById('button3')

function drag(e){
  
  e.dataTransfer.setData("text", e.target.id);
}
function allowDrop(e){
 e.preventDefault();
}
function drop(e){
  e.preventDefault();
  
  clone=e.target.cloneNode(true);
let data=e.dataTransfer.getData("text");
if(clone.id !== data) {
let nodelist=document.getElementById("parent").childNodes;
for(let i=0;i<nodelist.length;i++){
if(nodelist[i].id===data){
dragindex=i;}
}
document.getElementById("parent").replaceChild(document.getElementById(data),e.target);
document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
}
  
}

but.addEventListener('click',()=>{
  
  


var ul = document.getElementById("parent");
for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[Math.round((Math.random() * i)) | 0]);
}
    
   

  }

  )
  done.addEventListener('click',()=>{
    if(mi<3){
    const sortedOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let nl = [...document.getElementById("parent").children];
    let arr = nl.map((n) => n.textContent);
    if (sortedOrder.sort().join(",") == arr.join(",")) {
      alert("you did it");
      window.location.reload();
    }
  }})
  start.addEventListener('click',()=>{
  if(cli < 1){
    
    cli ++;
  {
    

  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer == -2) {
        if (confirm("Times up!")) {
          window.location.reload();
        }
      }
    }, 1000);
  }
  var fiveMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
}}})







  
  
    


    
  



