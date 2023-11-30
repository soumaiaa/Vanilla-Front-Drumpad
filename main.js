let div= document.querySelectorAll('.key');
let son= document.querySelectorAll('audio')
let char=["a","z","e","q","s","d","w","x","c"];
for(let i=0; i<9; i++){
window.addEventListener("keydown",
  function(event){
    let name=event.key
   if(name===char[i]){ 
    div[i].classList.add('playing');
    son[i].play();
   }
})
  window.addEventListener("keyup", 
  function () {
    div[i].classList.remove('playing');
    } ) 
}   
  
