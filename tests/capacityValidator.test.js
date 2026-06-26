const assert = require('assert');
const isCapacityValid = require('./capacityValidator');

function testCapacityRanges() {
    assert.strictEqual(isCapacityValid(0), false, "0 is below range");
    assert.strictEqual(isCapacityValid(1), true, "1 is minimum bound");
    assert.strictEqual(isCapacityValid(50), true, "50 is within range");
    assert.strictEqual(isCapacityValid(100), true, "100 is maximum bound");
    assert.strictEqual(isCapacityValid(101), false, "101 is above range");
    console.log("Parameter-Range Pattern: testCapacityRanges passed!");
}

testCapacityRanges();
