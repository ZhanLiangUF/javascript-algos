var rotate = function(arr) {

  let rowLen=arr.length, colLen=arr[0].length;

  // transpose the matrix : 
  for(let i=0; i<rowLen; i++){
      for(let j=i+1; j<colLen; j++){
          [[arr[i][j]],[arr[j][i]]] = [[arr[j][i]],[arr[i][j]]]    // swapping out
      }
  }

  // reverse the matrix :
  for(let row of arr){
      row.reverse();
  }

};


/*
Input:
1 2 3 
4 5 6
7 8 9  
Output:
7 4 1 
8 5 2
9 6 3
*/