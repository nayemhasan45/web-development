document.getElementById('tBtn').addEventListener('click',function(){
    const baseValue = document.getElementById('tInputB').value;
    const heightValue = document.getElementById('tInputH').value;
    const base = parseFloat(baseValue);
    const height = parseFloat(heightValue);
    const area = 0.5*base*height;
    document.getElementById('tAreaAns').innerText=area;
})