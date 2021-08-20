const hasCycle = (graph) => {
  let keys = Object.keys(graph)
  let visited = {}
  for (let key of keys){
    visited[key] = 0
  }

  for(let key of keys){
    if (search_tree(key, graph, visited) == true) {
      return true
    } 
  }
  return false
};

const search_tree = (key, graph, visited) => {
  if(visited[key] == 2) return false
  if(visited[key] == 1) return true
  
  visited[key] = 1
  for(let neighbor of graph[key]){ 
   if(search_tree(neighbor, graph, visited) === true){
     return true;
   }
  }
  visited[key] = 2
  return false
}