class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  Show() {
    return `(${this.x},${this.y})`;
  }

  Equals(p) {
    if (this.x === p.x && this.y === p.y) {
      return "Equals";
    } else {
      return "NOT Equals";
    }
  }
}

//סעיף2
function checkEqualty(x, y, parray) {
  for (let i = 0; i < parray.length; i++) {
    if (parray[i].x === x && parray[i].y === y) {
      return "True";
    }
  }
  return "False";
}

p = new Point(10, 10);
p1 = new Point(8, 9);
p2 = new Point(8, 8);
parray = [p, p1, p2];

console.log(checkEqualty(10, 10, parray)); //True
console.log(checkEqualty(18, 10, parray)); //False

//סעיף3
function checkEqualtyInArray(p, parray) {
  for (let i = 0; i < parray.length; i++) {
    if (p.Equals(parray[i]) === "Equals") {
      return "Equals";
    }
  }
  return "Not Equals";
}

p3 = new Point(10, 10);
p4 = new Point(9, 9);
p5 = new Point(8, 8);
p6 = new Point(20, 20);
parray2 = [p3, p4, p5];

var checkparray2 = checkEqualtyInArray(p6, parray2); // Not Equals
console.log(checkparray2);

parray3 = [p3, p4, p5, p6];
var checkparray3 = checkEqualtyInArray(p6, parray3); //Equals
console.log(checkparray3);

function checkDistance(points) {
  let res = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let x1 = points[i].x;
    let x2 = points[i + 1].x;
    let y1 = points[i].y;
    let y2 = points[i + 1].y;

    var xDifferenceSquared = Math.pow(x2 - x1, 2);
    var yDifferenceSquared = Math.pow(y2 - y1, 2);
    var d = Math.sqrt(xDifferenceSquared + yDifferenceSquared);

    res += d;
  }
  return res;
}

var result = checkDistance(parray3);
console.log("Total distance:", result);
