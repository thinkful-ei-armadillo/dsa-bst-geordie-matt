'use strict';

const BST = require('./BST');


function main() {
  const BST1 = new BST();
  const BST2 = new BST();
  const data = [3,1,4,6,9,2,5,7];
  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

  for(let i = 0; i< data.length ; i++){
    BST1.insert(data[i],data[i]);
  }
  for(let i = 0; i < letters.length; i++){
    BST2.insert(letters[i],letters[i]);
  }

  // console.log(BST1)
  // console.log(BST2)
  // console.log(treeHeight(BST1));
  // console.log(isItBST(BST1));
  console.log(thirdLargest(BST1));
}

main();



/*

What does this program do?
Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?
*/
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// O(log n)
// Sums up all the nodes of a tree.

// height function
function treeHeight(t){
  console.log('working with ' + t.value);
  console.log('right is ' + t.right);
  console.log('left is ' + t.left);
  if(t.right === null && t.left === null) {
    console.log('at the bottom');
    return 1;
  }
  console.log('moving down a level');
  if(t.right !== null && t.left !== null) {
    return Math.max(treeHeight(t.right), treeHeight(t.left)) + 1;
  }
  if(t.right !== null && t.left === null) {
    return 1 + treeHeight(t.right);
  }
  if(t.left !== null && t.right === null) {
    return 1+ treeHeight(t.left);
  }
}

function isItBST(t){
  if(t.right === null && t.left === null) {
    return true;
  }
  if(t.left !== null && t.right === null) {
    return isItBST(t.left);
  }
  if(t.right !== null && t.left === null) {
    return isItBST(t.right);
  }
  if(t.left !== null && t.right !== null) {
    if(t.left.value < t.right.value) {
      return isItBST(t.left) && isItBST(t.right);
    } else { 
      return false;
    }
  }
}

function sortArray(arr){
  return arr.sort((a,b) => b-a)[2];
}

function thirdLargest(t, num = []) {
  
    if(!t.left && !t.right){
      num.push(t.value)
      return sortArray(num)
    }
    if(t.left !== null && t.right === null) {
      num.push(t.value)
      return thirdLargest(t.left,num);
    }
    if(t.right !== null && t.left === null) {
      num.push(t.value)
      return thirdLargest(t.right,num);
    }
    if(t.right !== null && t.left !== null) {
      num.push(t.value)
      return thirdLargest(t.right,num)
    }
  
}