function detectChar(event){
    const playerPressed = event.key;
    console.log(playerPressed);
    // if player pressed 'esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
    // get the expected char using id
    const expectedChar = document.getElementById('randomAlpha').innerText.toLocaleLowerCase();
    if(playerPressed===expectedChar){
        // remove the bg color from the keybord
        removeBgById(playerPressed);
        // set the score 
        const currentScore =parseInt(document.getElementById('currentScore').innerText);
        document.getElementById('currentScore').innerText=currentScore+1;
        gameLoop();
    }else{
        const currentLife=parseInt(document.getElementById('currentLife').innerText);
        document.getElementById('currentLife').innerText=currentLife-1;
        if(currentLife===0){
            gameOver();
        }
    }
}
function gameOver(){
    const totalScore =document.getElementById('currentScore').innerText;
            document.getElementById('finalScore').innerText=totalScore;
            const lastChar = document.getElementById('randomAlpha').innerText.toLocaleLowerCase();
            removeBgById(lastChar);
            hideElementById('playSection');
            showElementById('totalScore');
}
document.addEventListener('keyup',detectChar);
function gameLoop(){
    const alphabet = getRandomAlpha();
    const p = document.getElementById('randomAlpha');
    p.innerText=alphabet;
    setBgById(alphabet);
}
function playNow(){
    // hide everything except play screen
    hideElementById('homeSection');
    hideElementById('totalScore');
    showElementById('playSection');
    document.getElementById('currentScore').innerText=0;
    document.getElementById('currentLife').innerText=5;
    gameLoop();
}