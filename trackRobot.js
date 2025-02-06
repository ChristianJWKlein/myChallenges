// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

//take this back to robotics class, and map the grid from position
//can be given any amountnof numbers and must calculate

const trackRobot = (...distance) => {
  let x = 0,
    y = 0
  for (let i = 0; i < distance.length; i++) {
    // console.log(i % 4)
    if (i % 4 === 0) y += distance[i]
    if (i % 4 === 1) x += distance[i]
    if (i % 4 === 2) y -= distance[i]
    if (i % 4 === 3) x -= distance[i]
  }
  return [x, y]
}

console.log(trackRobot(20, 30, 10, 40)) //➞ [-10, 10]

console.log(trackRobot()) //➞ [0, 0]
// No movement means the robot stays at (0, 0).

console.log(trackRobot(-10, 20, 10)) //➞ [20, -20]
// The amount to move can be negative.
