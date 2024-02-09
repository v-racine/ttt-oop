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

//CODE: 1. Scaffolding

class Boards {
  constructor() {
    //STUB 
    //We need to model the 3x3 grid. Perhaps "squares"?
    //Data Structure?
    //What should the data structure store?
  }
}

class Square {
  constructor() {
    //STUB
    //We need some way to keep track of this square's marker 
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
    //STUB
    //Need a board and two players
  }

  play() {
    //SPIKE 
    this.displayWelcomeMessage();
    
    while(true) {
      this.displayBoard();

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

  displayBoard() {
    //STUB
    //display the board, including its current state
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