const BST = require('./BST');


function main() {
  const BST1 = new BST();
  const BST2 = new BST();
  const data = [3,1,4,6,9,2,5,7];
  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']

  for(let i = 0; i< data.length ; i++){
    BST1.insert(data[i],data[i]);
  }
  for(let i = 0; i < letters.length; i++){
    BST2.insert(letters[i],letters[i])
  }

  // console.log(tree(BST1))
  // console.log(BST2)

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
    return tree(t.left) + t.value + tree(t.right)
}

// O(log n)
// Sums up all the nodes of a tree.