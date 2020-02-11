//Variables Declaration
var numberOfSquares=6;
var colors=generateColor(6);
var squares=document.querySelectorAll(".square");
var ans=document.getElementById("answer");
var pickedColor=random();
var h1=document.querySelector("h1");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var colorChange=document.querySelector("#newcolor");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


//New Colors Button
colorChange.addEventListener("click", function(){
    colorChange.textContent="New Colors";
    ans.textContent="";
    h1.style.background="steelblue";
    colors=generateColor(numberOfSquares);
    pickedColor=random();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
});
//Easy and Hard buttons
easybtn.addEventListener("click", function(){
    numberOfSquares=3;
    ans.textContent="";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors=generateColor(numberOfSquares);
    pickedColor=random();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
         }
});
hardbtn.addEventListener("click", function(){
    numberOfSquares=6;
    ans.textContent="";
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors=generateColor(numberOfSquares);
    pickedColor=random();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
         squares[i].style.background=colors[i]; 
         squares[i].style.display="block";
    }
});

//Main Processing
for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor=(this.style.background);
        if(clickedColor===pickedColor){
            ans.textContent="Correct";
            ans.style.color="black";
            h1.style.background=clickedColor;
            colorChange.textContent="Play Again";
            for(var i=0;i<squares.length;i++){
                squares[i].style.background=clickedColor;
            }
        }
        else{
            ans.textContent="Try Again";
            ans.style.color="black";
            this.style.background="black";

        }
    });
}

//Extra Functions
function random(){
    var randomgen=Math.floor(Math.random()*colors.length);
    return colors[randomgen];
}

function generateColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
    arr.push(generatergb());
    }
    return arr;
}

function generatergb(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", "+ b + ")";

}