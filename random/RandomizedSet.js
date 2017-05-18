const helpers = require('../helpers.js')

/*  
    Leetcode # 380
    Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
    
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.positions = {};
    this.values = [];
};


/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.positions[val] !== undefined) {
        return false;
    } else {
        let size = this.values.length;
        this.positions[val] = size;
        this.values.push(val);
        return true;        
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let idx = this.positions[val];
    
    if (idx === undefined) {
        return false;
    } else {
        let lastIdx = this.values.length - 1;
        this.values[idx] = this.values[lastIdx];
        this.positions[this.values[idx]] = idx;
        delete this.positions[val];
        this.values.pop();
        return true;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let idx = Math.floor(Math.random() * this.values.length);
    return this.values[idx];
};


/* ---------------TESTS----------------- */
const assert = helpers.assert;

let rs = new RandomizedSet();
assert('insert returns true when item doesnt exit', true, rs.insert(1));
assert('remove returns false when item doesnt exit', false, rs.remove(2));
rs.insert(2);
rs.remove(1);
assert('getrandom returns the remaining value', 2, rs.getRandom());




