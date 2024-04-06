function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBgById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-800');
}
function getRandomAlpha(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');
    const index = Math.round(Math.random()*25);
    const alphabet = alphabetsArray[index];
    return alphabet;
}