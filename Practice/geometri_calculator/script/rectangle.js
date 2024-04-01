// function rectangleArea(){
//     const widthValue=parseFloat(document.getElementById('rInputW').value);
//     const lengthValue = parseFloat(document.getElementById('rInputL').value);
//     document.getElementById('rAreaAns').innerText=widthValue*lengthValue;
// }
function rectangleArea() {
    const width = getInputValueById('rInputW');
    const length = getInputValueById('rInputL');
    document.getElementById('rAreaAns').innerText = width * length;
}
function getInputValueById(inputId) {
    const value = parseFloat(document.getElementById(inputId).value);
    return value;
}