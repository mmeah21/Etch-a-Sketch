 const pad = document.querySelector('.pad');

 //select the div with class pad

//pad.textContent = 'test';
//testing pad content
const numberOfSquares = 30;
 createSquares(pad,numberOfSquares);
 const squares = document.querySelectorAll('div.square');
 





//container.innerHTML +='<div class="square"></div>';
 //creates squares for a container
 function createSquares (container,oneLine){
    var area = oneLine*oneLine

    for (var i = 0;i < area; i++) {
        container.innerHTML +='<div class="square"></div>';
    }
 }

//assign id number for each square
let squareList = Array.from(squares);
setIdSquares(squareList);


function setIdSquares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].id = i+1;
    }
}

function toPercentDimensions(num1){
    let ans=((.8/num1)*100);
    return ans+'%';
}

function toPercentBorder(num1){
    let ans=((0.2/num1)*100);
    return ans+'%';
}



//adjust width and height of squares to total

function adjusted (){
    document.querySelectorAll('.square').forEach(div => {
    div.style.height = toPercentDimensions(numberOfSquares);
    div.style.width = toPercentDimensions(numberOfSquares);
    div.style.borderWidth == toPercentBorder(numberOfSquares);
    })
};
console.log(toPercentDimensions(numberOfSquares));
console.log(toPercentBorder(numberOfSquares));
console.log(numberOfSquares);
adjusted();

