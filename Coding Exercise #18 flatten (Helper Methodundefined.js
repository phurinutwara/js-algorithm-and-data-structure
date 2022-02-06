const flatten = (arr) => {
  // add whatever parameters you deem necessary - good luck!
  // let's do helper method

  let flatted = []

  function helper(helperInput){
    //Base Case
    if(helperInput.length === 0) return;

    //Check Array
    if(Array.isArray(helperInput[0])) 
        helper(helperInput[0])
    else
        flatted.push(helperInput[0])
        
    helper(helperInput.slice(1))
  }

  helper(arr);

  return flatted
};

console.log(flatten([1,[3,4,[5,[[[[6]]]]]]]))

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]