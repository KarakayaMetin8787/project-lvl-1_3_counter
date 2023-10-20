const pTag = document.body.querySelector("main p");

function addOne(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue + 1;
}
function extrOne(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue - 1;
}
function addTen(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue + 10;
}
function extrTen(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue - 10;
}
function addHundred(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue + 100;
}
function extrHundred(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue - 100;
}
function reset(){
    pTag.textContent = 0;
}
function multiTwo(){
    const pTagValue = Number(pTag.textContent);
    pTag.textContent = pTagValue * 2;
}