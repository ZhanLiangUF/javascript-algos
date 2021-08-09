const subsets = (elements) => { //[a,b,c,d]
    let result = [[]] //[[],[a], [a,b], [a,b,c], [a,c]]
    
    for (let i = 0; i < elements.length; i ++){
      result.push([elements[i]])
      for (let j = i + 1; j < elements.length; j++){
        result.push([...result[result.length - 1],...elements[j]])
        if(j - i > 1){
          result.push([...[elements[i],...[elements[j]]]])
        }
      }
}
  return result
};

// n^2
// n

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const ele = elements[0];
  const remainingElements = elements.slice(1);
  const subsetsWithoutEle = subsets(remainingElements);
  const subsetsWithEle = subsetsWithoutEle.map((sub) => [ele, ...sub]);
  return [...subsetsWithoutEle, ...subsetsWithEle];
};

// 2^n
// 2^n