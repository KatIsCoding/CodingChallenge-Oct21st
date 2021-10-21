const solution = (moves, x, y) => {
  let currentx = 0, currenty = 0;
  const directions = {
    "NORTH": {"x": 0, "y": 1},
    "SOUTH": {"x":0, "y": -1},
    "EAST": {"x": 1, "y":0},
    "WEST": {"x": -1, "y":0}
  }
  //O(n)
  moves.forEach(element => {
    currentx = currentx + directions[element]["x"]
    currenty = currenty + directions[element]["y"]
  });
  return currentx === x && currenty === y;
}

console.log(solution(["WEST", "EAST"], 1, 0))