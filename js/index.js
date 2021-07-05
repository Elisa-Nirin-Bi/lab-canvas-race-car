const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
function closeStartPage(){
  const close = document.getElementById("intro");
  close.style.display = "none"; 
}
 
  function startGame() {
    closeStartPage()
    const roadImg = new Image();
  roadImg.src = './images/road.png';
  roadImg.addEventListener('load', () => {
    context.drawImage(roadImg, 0, 0, 500,700);
    
  })
  

 
  const carImg = new Image();
  carImg.src = './images/car.png';
  carImg.addEventListener('load', () => {
   
      context.drawImage(carImg, 220, 580, 50,100);
      
    })
  
  }}