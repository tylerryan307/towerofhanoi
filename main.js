'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do? //  (inside are called parametter/s) call in pieces of data
const movePiece = (startStackArray, endStackArray) => {
  // Your code here
  let lastElement = startStackArray[startStackArray.length - 1]; // Last element in selected array is now = lastElement which is a number
  startStackArray.pop()
  endStackArray.push(lastElement); 
  
  
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStackNum, endStackNum) => { // Modified from the unit test
  // Your code here
  stacks[startStackNum]
  stacks[endStackNum]
  if(startStackNum > endStackNum) {
    return false
    console.log('You can not move here!')
  } else {
    return true
  }
} 

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  const checkEndStackArray = [4, 3, 2, 1];
  for(let i = 0; i < stacks.b.length || i < stacks.c.length; i++) {
    if (stacks.b[i] == checkEndStackArray[i]) {
      console.log('You Are A Wienner HAHA!')
    } else if (stacks.c[i] == checkEndStackArray[i]) {
      console.log('You Are A Wienner HAHA!')
    } else {
      return false
    }
  }
  // for(let i = 0; i < stacks.c.length; i++) {
  //   if (stacks.c[i] == checkEndStackArray[i]) {
  //     console.log('You Are A Wienner HAHA!')
  //   } else {
  //     return false
  //   }
  // }
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  stacks[startStack] // 
  stacks[endStack]
  movePiece(stacks[startStack], stacks[endStack]) //movePiece function is being called and (a, b) is what is being passed back to the function
  //checkForWin(stacks[endStack])
  isLegal(stacks[startStack], stacks[endStack])
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
      //checkForWin(); 
    });
  });
  
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
