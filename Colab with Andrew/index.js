var startGame=false
var canMouse=true
var x,y,c
yVelocity=0
addEventListener('mousedown',onMousePressed)
addEventListener('mouseup',onMouseUp)
function onMousePressed(event){
    if (!startGame | !canMouse){return}
    yVelocity=-5
    canMouse=false
}
function onMouseUp(event){
    if (!startGame){return}
    canMouse=true
}









function start(){
    if(startGame){return}
    startGame=true
    x=10
    y=10
    canvas=document.getElementById('game')
    c=canvas.getContext('2d')
    setInterval(mainLoop,30)
}
function mainLoop(){
    c.clearRect(0,0,canvas.width,canvas.height)
    yVelocity+=0.5
    console.log(yVelocity)
    if(yVelocity>10){yVelocity=10}
    y=y+yVelocity
    c.fillStyle="forestgreen";
    c.fillRect(x,y,30,30)

}