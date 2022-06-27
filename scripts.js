 const pad = document.querySelector('.pad');

 //select the div with class pad

//pad.textContent = 'test';
//testing pad content
 createSquares(pad,16);
 const squares = document.querySelectorAll('div.square');





//container.innerHTML +='<div class="square"></div>';
 //creates squares for a container
 function createSquares (container,totalSquares){


    for (var i = 0;i < totalSquares; i++) {
        container.innerHTML +='<div class="square"></div>';
    }
 }

//assign id number for each square
let squareList = Array.from(squares);
setIdSquares(squareList);



function setIdSquares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].id=i+1;
    }
}


