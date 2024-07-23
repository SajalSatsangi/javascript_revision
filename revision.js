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

// Revision 23: readOctal reads text as octal
r.readOctal = function (octalString) {
  return parseInt(octalString, 8);
};

// Revision 24: two complex numbers can be equal
r.Complex = class {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  isEqualTo(other) {
    return this.real === other.real && this.imaginary === other.imaginary;
  }
  toString() {
    const imaginarySign = this.imaginary >= 0 ? "+" : "";
    return `${this.real}${imaginarySign}${this.imaginary}i`;
  }
};

// Revision 25: line is uneditable
// r.Line.prototype.editable = false;

// Revision 26: impose adds item of two equal sized arrays
// r.impose = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     throw new Error("Arrays must be of equal size");
//   }
//   return arr1.map((item, index) => item + arr2[index]);
// };

// Revision 27: complex numbers can be divided
r.Complex.prototype["/"] = function (other) {
  const denominator = other.real ** 2 + other.imaginary ** 2;
  const realPart =
    (this.real * other.real + this.imaginary * other.imaginary) / denominator;
  const imaginaryPart =
    (this.imaginary * other.real - this.real * other.imaginary) / denominator;
  return new r.Complex(realPart, imaginaryPart);
};
r.Complex.prototype["*"] = function (other) {
  const realPart = this.real * other.real - this.imaginary * other.imaginary;
  const imaginaryPart =
    this.real * other.imaginary + this.imaginary * other.real;
  return new r.Complex(realPart, imaginaryPart);
};

// Revision 28: templates don't have any fields
r.Template = r.Template = class {
  constructor(templateString) {
    this.templateString = templateString;
  }
};

// Revision 29: templates can be used to prepare formateed text
r.Template.prototype.apply = function (bag) {
  return this.templateString.replace(/\d+/g, (match) => bag[parseInt(match)]);
};

// Revision 30: accumlator starts with a number
r.accumulator = class {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }
};

// Revision 31: add data to accumlator
r.accumulator.prototype.add = function (value) {
  this.value += value;
};
r.operate = function (obj, method, ...args) {
  return method.apply(obj, args);
};

// Revision 32: lines parallel to axis are parallel
r.Line.prototype.isParallelTo = function (line) {
  const slope1 = (this.end.y - this.start.y) / (this.end.x - this.start.x);
  const slope2 = (line.end.y - line.start.y) / (line.end.x - line.start.x);
  return slope1 === slope2;
};

// Revision 33: do performs action once if condition is not set
r.do = function (actionFunction) {
  return {
    while: function (conditionFunction) {
      if (!conditionFunction()) {
        actionFunction();
      }
    }
  };
};

// Revision 34: resize array does nothing when new size is not given
r.resizeArray = function (arr, newSize, newValue) {
  if (newSize === undefined) {
    return;
  }
  if (newSize < arr.length) {
    arr.length = newSize;
  } else {
    for (var i = arr.length; i < newSize; i++) {
      arr.push(newValue);
    }
  }
};

// Revision 35: do performs action as long as condition prevails
// r.do = function(actionFunction) {
//   return {
//     while: function(conditionFunction) {
//       function execute() {
//         if (conditionFunction()) {
//           actionFunction();
//           execute();
//         }
//       }
//       execute();
//     }
//   };
// };

// Revision 36: check if point is in circle when moved
// r.Circle.prototype.moveTo = function (point) {
//   return new r.Circle(point, this.radius);
// };
// r.Circle.prototype.covers = function (point) {
//   const dx = point.x - this.center.x;
//   const dy = point.y - this.center.y;
//   return dx * dx + dy * dy <= this.radius * this.radius;
// };

// Revision 37: validate Positive Number throws error not a number for string
r.validatePositiveNumber = function (number) {
  if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('not a number');
  }
  if (number <= 0) {
      throw new Error('not a positive number');
  }
};

// Revision 38: add 5 increments all Items by 5
r.add = function (arr) {
  return arr.map((item) => item + 5);
};

// Revision 39: resize array adds elements of given object to existing array
r.resizeArray = function(array, newSize, fillValue) {
  if (newSize > array.length) {
      for (let i = array.length; i < newSize; i++) {
          array[i] = fillValue;
      }
  } else if (newSize < array.length) {
      array.length = newSize;
  }
};

// Revision 40: move to moves the rectangle to the new place
r.Rectangle = class {
  constructor(position, dimensions) {
    this.position = position; // [x, y]
    this.length = dimensions[0];
    this.width = dimensions[1];
  }
  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
  moveTo(newPosition) {
    return new r.Rectangle(newPosition, [this.length, this.width]);
  }
};
r.createRectangle = function (position, dimensions) {
  return new r.Rectangle(position, dimensions);
};

// Revision 41: intesection with a larger set result in smaller set
// r.Set.prototype.intersection = function (otherSet) {
//   let result = new r.Set();
//   for (let elem of this.elements) {
//     if (otherSet.elements.has(elem)) {
//       result.elements.add(elem);
//     }
//   }
//   return this.elements.size < otherSet.elements.size ? result : otherSet;
// };