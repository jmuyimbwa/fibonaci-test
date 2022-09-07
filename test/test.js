//Jimmy Muyimbwa
// Asaba Doreen

const assert = require("chai").assert;
const { it } = require("mocha");
const fibonaci = require("../fibonaci");

describe("Fibonacci Function unit test", () => {
    it("TEST 1", () => {
        assert.deepEqual(fibonaci(0), []);
        console.log(".........")
    });

    it("TEST 2", () => {
        assert.deepEqual(fibonaci(1), [0]);
        console.log(".........")
    });

    it("TEST 3", () => {
        assert.deepEqual(fibonaci(2), [0, 1]);
        console.log(".........")
    });
})