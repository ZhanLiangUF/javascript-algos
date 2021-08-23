const islandCount = (grid) => {
  let height = grid.length;
  let width = grid[0].length
  const visited = Array.from({ length: height }, () => 
  Array.from({ length: width }, () => false));
  
  count = 0
  for(let r = 0; r < height; r++){
    console.log(height, width)
    for(let c = 0; c < width; c++){
      if(grid[r][c] == "W") continue
      if(grid[r][c] == "L" && visited[r][c] == false){
        explore(r,c,grid,visited)
        count += 1
      }
    }
  }
  return count
}

const explore = (r, c, grid, visited) => { //recursive 
  if (r < 0 || r >= grid.length) return
  if (c < 0 || c >= grid[0].length) return
  if (visited[r][c] == true || grid[r][c] == "W") return
  visited[r][c] = true
  
  explore(r - 1, c, grid, visited)
  explore(r + 1, c, grid, visited)
  explore(r, c - 1, grid, visited)
  explore(r, c + 1, grid, visited)
}