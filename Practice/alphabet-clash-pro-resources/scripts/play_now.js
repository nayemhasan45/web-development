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