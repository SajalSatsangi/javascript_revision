"use strict";
var r = {};
exports.r = r;

// Revision 1: Sort Numbers In Descending Order
r.compare = {};
r.compare.numbers_descending = function (first_num, second_num) {
  return second_num - first_num;
};

// Revision 2: Checks if a point is on a line
r.Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  isOn(line) {
    var slope = (line.end.y - line.start.y) / (line.end.x - line.start.x);
    return this.y - line.start.y === slope * (this.x - line.start.x);
  }
};
r.Line = class {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

// Revision 3: Create New Array with given size and object
r.createNewArray = function (size, obj) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(obj);
  }
  return arr;
};

// Revision 4: Intersection of two sets finds common items two sets
r.Set = class {
  constructor(...elements) {
    this.elements = new Set(elements);
  }
  intersection(otherSet) {
    let result = new r.Set();
    for (let elem of this.elements) {
      if (otherSet.elements.has(elem)) {
        result.elements.add(elem);
      }
    }
    return result;
  }
  isEqualTo(otherSet) {
    if (!(otherSet instanceof r.Set)) {
      return false;
    }
    if (this.elements.size !== otherSet.elements.size) {
      return false;
    }
    for (let elem of this.elements) {
      if (!otherSet.elements.has(elem)) {
        return false;
      }
    }
    return true;
  }
};

// Revision 5: Resize Array does not change elements of existing array
r.resizeArray = function (arr, newSize, newValue) {
  if (newSize < arr.length) {
    arr.length = newSize;
  } else {
    for (var i = arr.length; i < newSize; i++) {
      arr.push(newValue);
    }
  }
};

// Revision 6: Impose adds items of second array if available
r.impose = function (arr1, arr2) {
  var minLength = Math.min(arr1.length, arr2.length);
  var arr3 = [];
  for (var i = 0; i < minLength; i++) {
    arr3.push(arr1[i] + arr2[i]);
  }
  if (arr1.length > minLength) {
    arr3 = arr3.concat(arr1.slice(minLength));
  } else if (arr2.length > minLength) {
    arr3 = arr3.concat(arr2.slice(minLength));
  }
  return arr3;
};

// Revision 7: Union of two sets merges elements
r.Set.prototype.union = function (otherSet) {
  if (!(otherSet instanceof r.Set)) {
    return false;
  }
  let result = new r.Set(...this.elements);
  for (let elem of otherSet.elements) {
    result.elements.add(elem);
  }
  return result;
};

// Revision 8: if evaluates respective values
r.if = function (condition) {
  return {
    then: function (thenFn) {
      this.thenFn = thenFn;
      return this;
    },
    else: function (elseFn) {
      return condition ? this.thenFn() : elseFn();
    },
  };
};

// Revision 9: Intersection of same sets results in itself
r.Set.prototype.intersection = function (otherSet) {
  if (!(otherSet instanceof r.Set)) {
    return false;
  }
  let intersectionSet = new r.Set();
  for (let elem of this.elements) {
    if (otherSet.elements.has(elem)) {
      intersectionSet.elements.add(elem);
    }
  }
  return intersectionSet;
};

// Revision 10: Library does not export more than what is needed
// Just complete the code in 57 functions

// Revision 11: accumlater starts with 0
r.accumulator = class {
  constructor() {
    this.value = 0;
  }
};
r.operate = function (obj, method) {
  return method.call(obj);
};

// Revision 12: findY give x coordinate of a line only inside
r.Line.prototype.findY = function (x) {
  if (x < this.start.x || x > this.end.x) return null;
  var slope = (this.end.y - this.start.y) / (this.end.x - this.start.x);
  return this.start.y + slope * (x - this.start.x);
};

// Revision 13: while performs action as long as condition prevails
r.while = function (conditionFunction) {
  return {
    do(actionFunction) {
      (function execute() {
        if (conditionFunction()) {
          actionFunction();
          execute();
        }
      })();
    },
  };
};

// Revision 14: sort numbers by number of factors they have
// r.compare.numbers_by_total_factors = function (a, b) {
//   function countFactors(n) {
//     let count = 0;
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         count += i * i === n ? 1 : 2;
//       }
//     }
//     return count;
//   }
//   const factorsA = countFactors(a);
//   const factorsB = countFactors(b);
//   return factorsA - factorsB;
// };

// Revision 15: the numbers are in ascending order
// r.is = {};
// r.is.greater_than_previous_number = function (current, index, array) {
//   if (index === 0) return false;
//   return current > array[index - 1];
// };

// Revision 16: findX gives x coordinate for a given y on the line
r.Line.prototype.findX = function (y) {
  const slope = (this.end.y - this.start.y) / (this.end.x - this.start.x);
  if (y < this.start.y || y > this.end.y) return null;
  return (y - this.start.y) / slope + this.start.x;
};

// Revision 17: overlapping lines are not parallel
r.Line.prototype.isParallelTo = function (line) {
  const slope1 = (this.end.y - this.start.y) / (this.end.x - this.start.x);
  const slope2 = (line.end.y - line.start.y) / (line.end.x - line.start.x);
  return slope1 === slope2;
};

// Revision 18: sets are represented by their elements
// r.Set.prototype.toString = function () {
//   if (this.elements.size === 0) {
//     return "Set{}";
//   }
//   const elements = Array.from(this.elements)
//     .map((e) => `${e}`)
//     .join("; ");
//   return `Set{${elements}}`;
// };

// Revision 19: sort circles by size
r.Circle = class {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
};
r.compare.circles = function (circle1, circle2) {
  return circle1.radius - circle2.radius;
};

// Revision 20: readHex reads text as octal
r.readHex = function (hexString) {
  return parseInt(hexString, 16);
};

// Revision 21: lines can be equal
r.Line.prototype.isEqualTo = function (line) {
  return (
    this.start.x === line.start.x &&
    this.start.y === line.start.y &&
    this.end.x === line.end.x &&
    this.end.y === line.end.y
  );
};

// Revision 22: reverseText reverses different words with spaces
r.reverseText = function (text) {
  return text
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};
