function rectangleArea(){
    const widthValue=parseFloat(document.getElementById('rInputW').value);
    const lengthValue = parseFloat(document.getElementById('rInputL').value);
    document.getElementById('rAreaAns').innerText=widthValue*lengthValue;
}