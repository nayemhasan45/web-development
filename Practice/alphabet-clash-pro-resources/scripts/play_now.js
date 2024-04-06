function detectChar(event){
    const playerPressed = event.key;
    const expectedChar = document.getElementById('randomAlpha').innerText.toLocaleLowerCase();
    // console.log('player pressed :',playerPressed,'expected char :',expectedChar);
    if(playerPressed===expectedChar){
        console.log('you press the write char');
    }else{
        console.log('you enter the wrong char')
    }
}
document.addEventListener('keyup',detectChar);
function gameLoop(){
    const alphabet = getRandomAlpha();
    const p = document.getElementById('randomAlpha');
    p.innerText=alphabet;
    setBgById(alphabet);
}
function playNow(){
    hideElementById('homeSection');
    showElementById('playSection');
    gameLoop();
}