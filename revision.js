"use strict"
var r = {};
exports.r = r;


// Revision 1
r.compare = {};
r.compare.numbers_descending = function(_1st_num, _2nd_num) {
    return (_2nd_num - _1st_num);
};


// Revision 2
r.Point = class {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	isOn(line) {
		var slope = (line.end.y - line.start.y) / (line.end.x - line.start.x);
		return (this.y - line.start.y) === slope * (this.x - line.start.x);
	}
};
r.Line = function(a, b) {
    this.start = start;
    this.end = end;
};


// Revision 3
r.createNewArray = function(size, obj) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(obj);
    }
    return arr;
};


// Revision 4
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


// Revision 5
r.resizeArray = function(arr, newSize, newValue) {
    if (newSize < arr.length) {
        arr.length = newSize;
    } else {
        for (var i = arr.length; i < newSize; i++) {
            arr.push(newValue);
        }
    }
};