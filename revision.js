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