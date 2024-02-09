//1. Description:

/*
- Tic Tac Toe is a 2-player board game.
- The board is a 3x3 grid.
- Players take turns marking a square with a marker that identifies the player.
- Traditionally, the player to go first uses the marker X to mark her squares, and the
player to go second uses the marker O.
- The first player to mark 3 squares in a row with her marker wins the game.
- A row can be a horizontal row, a vertical column, or either of the two diagonals 
(top-left to bottom-right and top-right to bottom-left).
- There is one human player and one computer player.
- The human player always moves (places a marker) first in the initial version of our 
game; you can change that later.
*/

//2. Nouns & Verbs:

/*
Nouns: game, board, square, grid, marker, row, player, human, computer
Verbs: play, mark, move, place 

Some of these are synonyms, so we can get rid of some redundancy. 
*/

//3. Organize: 

/*
NOUNS:
-Game 
-Board
-Row
-Square
-Marker
-Player

-SUBS for `Player:
-Human
-Computer

VERBS for `Player`:
-Mark 
-Play
*/

//NOTE: These nouns and verbs provide a general list of the types of objects we'll 
//need (the nouns), and the behaviors that each object should implement (the verbs).

//CODE:

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    //STUB 
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Row {
  constructor() {
    //STUB
    //We need a way to identify a row of 3 squares 
  }
}

class Marker {
  constructor() {
    //STUB
    //something to represent a player's mark on the board
  }
}

class Player {
  constructor() {
    //STUB
    //maybe a "marker" to keep track of this player's symbol
  }

  mark() {
    //STUB
    //We need a way to makr the board with this player's marker 
    //How do we access the board?
  }

  play() {
    //STUB
    //We need a way for each player to play the game
    //Do we need to access the board?

  }
}

class Human extends Player {
  constructor() {
    //STUB
  }
}

class Computer extends Player {
  constructor() {
    //STUB
  }
}

//Orchestration Engine
class TTTGame {
  constructor() {
    this.board = new Board();
  }

  play() {
    //SPIKE 
    this.displayWelcomeMessage();
    
    while(true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMovers();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    //STUB
    console.log("Thanks for playing! Arrivederci!!")
  }

  displayResults() {
    //STUB
    //print the results of this game (win, lose, tie)
  }

 
 
    

  firstPlayerMoves() {
    //STUB
    //first player makes a move 
  }

  secondPlayerMovers() {
    //STUB
    //second player makes a move
  }

  gameOver() {
    //STUB
    return false;
  }
}

let game = new TTTGame();
game.play();