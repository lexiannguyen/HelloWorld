/* var destList =[
 "<a href='../places/seoul.html'> Seoul </a>", 
  "<a href='../places/kyoto.html'> Kyoto </a>", 
  "<a href='../places/LA.html'> Los Angeles </a>", 
  "<a href='../places/osaka.html'> Osaka </a>" 
]
var dest = document.getElementById("thedest");
var destbutton = document.getElementByID("destbutton");
var count = 0;
var item = destList[count]

if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}

function generateDest() {
  count += 1;
  if (count == destList.lenth) {
    count = 0;
  }
  if (item == destList[0]) {
    dest.innerHTML = item
 
  }
  if (item == destList[1]) {
    dest.innerHTML = item;
   
  }
  if (item == destList[2]) {
    dest.innerHTML = item;
    
  }
  if (item == destList[3]) {
    dest.innerHTML = item;
    
  }
  
  
  
  
  
}  */

var destList = [
  "Seoul", 
  "Kyoto",
  "Osaka",
  "Los Angeles",
  
   
]

var dest = document.getElementById('thedest');
var destbutton = document.getElementById('destbutton');
var count = 0
var item = destList[0];


if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}

function generateDest() {
  
  count ++;
  if (count > destList.length) {
    count = 0; 
  }
  item = destList[count];
  changeLink();
  
  
}

function changeLink() {
  if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}
  destList[Math.floor(Math.random() * destList.length)];
  if (item == destList[0]) {
    dest.innerHTML = "<a href='../places/seoul.html'> Seoul </a>";
    if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}
  }
  if (item == destList[1]) {
    dest.innerHTML = "<a href='../places/kyoto.html'> Kyoto </a>";
    if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}
  }
  if (item == destList[2]) {
    dest.innerHTML = "<a href='../places/osaka.html'> Osaka </a>";
    if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}
  }
  if (item == destList[3]) {
    dest.innerHTML = "<a href='../places/LA.html'> Los Angeles </a>";
    if (destbutton) {
  destbutton.addEventListener("click", generateDest);
}
  }

} 

