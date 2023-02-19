// Program Title
//Variables
let boardA1 = document.getElementById("a1");
let boardA2 = document.getElementById("a2");
let boardA3 = document.getElementById("a3");
let boardB1 = document.getElementById("b1");
let boardB2 = document.getElementById("b2");
let boardB3 = document.getElementById("b3");
let boardC1 = document.getElementById("c1");
let boardC2 = document.getElementById("c2");
let boardC3 = document.getElementById("c3");
let player = "player1" ;
let a1stat = "empty";
let a2stat = "empty";
let a3stat = "empty";
let b1stat = "empty";
let b2stat = "empty";
let b3stat = "empty";
let c1stat = "empty";
let c2stat = "empty";
let c3stat = "empty";



//Event Listeners
boardA1.addEventListener("click" , () => { 
  boardA1click();
  win();
} );
boardA2.addEventListener("click", () => { 
  boardA2click();
  win();
} );
boardA3.addEventListener("click", () => { 
  boardA3click();
  win();
} );

boardB1.addEventListener("click", () => { 
  boardB1click();
  win();
} );
boardB2.addEventListener("click",() => { 
  boardB2click();
  win();
} );
boardB3.addEventListener("click", () => { 
  boardB3click();
  win();
} );
boardC1.addEventListener("click", () => { 
  boardC1click();
  win();
} );
boardC2.addEventListener("click", () => { 
  boardC2click();
  win();
} );
boardC3.addEventListener("click", () => { 
  boardC3click();
  win();
} );

function win() {
  if ((a1stat === "x" && a2stat === "x" && a3stat === "x") || (b1stat === "x" && b2stat === "x" && b3stat === "x") || (c1stat === "x" && c2stat === "x" && c3stat === "x") || (a1stat === "x" && b1stat === "x" && c1stat === "x") || (a2stat === "x" && b2stat === "x" && c2stat === "x") || (a3stat === "x" && b3stat === "x" && c3stat === "x") || (a1stat === "x" && b2stat === "x" && c3stat === "x") || (a3stat === "x" && b2stat === "x" && c1stat === "x")) {
   document.getElementById("result").innerHTML = "Player One Wins! Refresh the page to play again";

  } else if ((a1stat === "o" && a2stat === "o" && a3stat === "o") || (b1stat === "o" && b2stat === "o" && b3stat === "o") || (c1stat === "o" && c2stat === "o" && c3stat === "o") || (a1stat === "o" && b1stat === "o" && c1stat === "o") || (a2stat === "o" && b2stat === "o" && c2stat === "o") || (a3stat === "o" && b3stat === "o" && c3stat === "o") || (a1stat === "o" && b2stat === "o" && c3stat === "o") || (a3stat === "o" && b2stat === "o" && c1stat === "o")) {
   document.getElementById("result").innerHTML = "Player Two Wins! Refresh the page to play again.";

  } else if ((a1stat === "x" || a1stat === "o") && (a2stat === "x" || a2stat === "o") && (a3stat === "x" || a3stat === "o") && (b1stat === "x" || b1stat === "o") && (b2stat === "x" || b2stat === "o") && (b3stat === "x" || b3stat === "o") && (c1stat === "x" || c1stat === "o") && (c2stat === "x" || c2stat === "o") && (c3stat === "x" || c3stat === "o")) {
   document.getElementById("result").innerHTML = "It's a tie! Refresh the page to play again.";
  }
}


function boardA1click() {
if (player === "player1" && a1stat === "empty") {
boardA1.src = "img/a1X.png"

player = "player2"
document.getElementById("player2").classList.remove("blue")
document.getElementById("player2").classList.add("yourTurn")
document.getElementById("player1").classList.remove("yourTurn")
document.getElementById("player1").classList.add("red")
a1stat = "x"
} else if (player === "player2" && a1stat === "empty") {
  boardA1.src = "img/a1O.png"

player = "player1"
document.getElementById("player1").classList.remove("red")
document.getElementById("player1").classList.add("yourTurn")
document.getElementById("player2").classList.remove("yourTurn")
document.getElementById("player2").classList.add("blue")
a1stat = "o"
} else {
  alert("This space is full")
  } }

function boardA2click() {
  if (player === "player1" && a2stat === "empty") {
  boardA2.src = "img/a2X.png"
  
  player = "player2"
  document.getElementById("player2").classList.remove("blue")
  document.getElementById("player2").classList.add("yourTurn")
  document.getElementById("player1").classList.remove("yourTurn")
  document.getElementById("player1").classList.add("red")
a2stat = "x";
  } else if (player === "player2" && a2stat === "empty") {
    boardA2.src = "img/a2O.png"
  
  player = "player1"
  document.getElementById("player1").classList.remove("red")
  document.getElementById("player1").classList.add("yourTurn")
  document.getElementById("player2").classList.remove("yourTurn")
  document.getElementById("player2").classList.add("blue")
a2stat = "o";
  } else {
    alert("This space is full")
  } }

function boardA3click() {
    if (player === "player1" && a3stat === "empty") {
    boardA3.src = "img/a3X.png"
    
    player = "player2"
    document.getElementById("player2").classList.remove("blue")
    document.getElementById("player2").classList.add("yourTurn")
    document.getElementById("player1").classList.remove("yourTurn")
    document.getElementById("player1").classList.add("red")
    a3stat = "x"

    } else if (player === "player2" && a3stat === "empty") {
      boardA3.src = "img/a3O.png"
    
    player = "player1"
    document.getElementById("player1").classList.remove("red")
    document.getElementById("player1").classList.add("yourTurn")
    document.getElementById("player2").classList.remove("yourTurn")
    document.getElementById("player2").classList.add("blue")
    a3stat = "o"
    } else {
      alert("This space is full")
  } }

function boardB1click() {
      if (player === "player1" && b1stat === "empty") {
      boardB1.src = "img/b1X.png"
      
      player = "player2"
      document.getElementById("player2").classList.remove("blue")
      document.getElementById("player2").classList.add("yourTurn")
      document.getElementById("player1").classList.remove("yourTurn")
      document.getElementById("player1").classList.add("red")
      b1stat = "x"
  
      } else if (player === "player2" && b1stat === "empty") {
        boardB1.src = "img/b1O.png"
      
      player = "player1"
      document.getElementById("player1").classList.remove("red")
      document.getElementById("player1").classList.add("yourTurn")
      document.getElementById("player2").classList.remove("yourTurn")
      document.getElementById("player2").classList.add("blue")
      b1stat = "o"
      } else {
        alert("This space is full")
  } }

function boardB2click() {
        if (player === "player1" && b2stat === "empty") {
        boardB2.src = "img/b2X.png"
        
        player = "player2"
        document.getElementById("player2").classList.remove("blue")
        document.getElementById("player2").classList.add("yourTurn")
        document.getElementById("player1").classList.remove("yourTurn")
        document.getElementById("player1").classList.add("red")
        b2stat = "x"
    
        } else if (player === "player2" && b2stat === "empty") {
          boardB2.src = "img/b2O.png"
        
        player = "player1"
        document.getElementById("player1").classList.remove("red")
        document.getElementById("player1").classList.add("yourTurn")
        document.getElementById("player2").classList.remove("yourTurn")
        document.getElementById("player2").classList.add("blue")
        b2stat = "o"
        } else {
          alert("This space is full")
  } }

function boardB3click() {
          if (player === "player1" && b3stat === "empty") {
          boardB3.src = "img/b3X.png"
          
          player = "player2"
          document.getElementById("player2").classList.remove("blue")
          document.getElementById("player2").classList.add("yourTurn")
          document.getElementById("player1").classList.remove("yourTurn")
          document.getElementById("player1").classList.add("red")
          b3stat = "x"
      
          } else if (player === "player2" && b3stat === "empty") {
            boardB3.src = "img/b3O.png"
          
          player = "player1"
          document.getElementById("player1").classList.remove("red")
          document.getElementById("player1").classList.add("yourTurn")
          document.getElementById("player2").classList.remove("yourTurn")
          document.getElementById("player2").classList.add("blue")
          b3stat = "o"
          } else {
            alert("This space is full")
  } }


function boardC1click() {
            if (player === "player1" && c1stat === "empty") {
            boardC1.src = "img/c1X.png"
            
            player = "player2"
            document.getElementById("player2").classList.remove("blue")
            document.getElementById("player2").classList.add("yourTurn")
            document.getElementById("player1").classList.remove("yourTurn")
            document.getElementById("player1").classList.add("red")
            c1stat = "x"
        
            } else if (player === "player2" && c1stat === "empty") {
              boardC1.src = "img/c1O.png"
            
            player = "player1"
            document.getElementById("player1").classList.remove("red")
            document.getElementById("player1").classList.add("yourTurn")
            document.getElementById("player2").classList.remove("yourTurn")
            document.getElementById("player2").classList.add("blue")
            c1stat = "o"
            } else {
              alert("This space is full")
  } }

function boardC2click() {
    if (player === "player1" && c2stat === "empty") {
    boardC2.src = "img/c2X.png"
    
    player = "player2"
    document.getElementById("player2").classList.remove("blue")
    document.getElementById("player2").classList.add("yourTurn")
    document.getElementById("player1").classList.remove("yourTurn")
    document.getElementById("player1").classList.add("red")
    c2stat = "x"

    } else if (player === "player2" && c2stat === "empty") {
      boardC2.src = "img/c2O.png"
    
    player = "player1"
    document.getElementById("player1").classList.remove("red")
    document.getElementById("player1").classList.add("yourTurn")
    document.getElementById("player2").classList.remove("yourTurn")
    document.getElementById("player2").classList.add("blue")
    c2stat = "o"
    } else {
      alert("This space is full")
} }

function boardC3click() {
  if (player === "player1" && c3stat === "empty") {
  boardC3.src = "img/c3X.png"
  
  player = "player2"
  document.getElementById("player2").classList.remove("blue")
  document.getElementById("player2").classList.add("yourTurn")
  document.getElementById("player1").classList.remove("yourTurn")
  document.getElementById("player1").classList.add("red")
  c3stat = "x"

  } else if (player === "player2" && c3stat === "empty") {
    boardC3.src = "img/c3O.png"
  
  player = "player1"
  document.getElementById("player1").classList.remove("red")
  document.getElementById("player1").classList.add("yourTurn")
  document.getElementById("player2").classList.remove("yourTurn")
  document.getElementById("player2").classList.add("blue")
  c3stat = "o"
  } else {
    alert("This space is full")
} }
