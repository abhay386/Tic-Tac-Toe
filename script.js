
console.log("welcome to Tic Tac Toe ")
let music = new Audio("music.mp3");
let  audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";
let isgameover  =  false;







// function to change the turn
const changeTurn = ()=>{
    return turn === "x"?"0":"x"
}

// cheack for win 

const checkWin = () =>{
    let boxtext = document.querySelectorAll(".boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== "")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText +' won'
        isgameover = true;
        gameover.play()
        
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
      
       


       
        
    }
})
}

// game logic:

let boxes = document.getElementsByClassName("box")
Array.from( boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
   element.addEventListener("click",()=>{
        if (boxtext.innerText===''&& !isgameover){
            boxtext.innerText = turn;
           turn = changeTurn()
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
        }
        music.play()
    })
})

// adding onclick event listner to reset button ;
let reset = document.getElementsByClassName("reset")[0]
reset.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
    })
    turn = "x"
    isgameover = false;
  
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    music.pause();
    music.currentTime = 0;
   

})




   

 

