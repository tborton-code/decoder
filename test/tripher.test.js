const { expect } = require("chai");
const mocha = require("mocha")
const tripherTest = require("../src/tripher").tripher;

describe("tripher function should return an encoded or decoded message based on the arguments.",()=>{
    it("Should encode a string properly",()=>{
        const actual = tripherTest("Mickey Mouse");
        const expected = "Mk uieMscyoe";
        expect(actual).to.eql(expected);
    })
    it("Should decode a string properly",()=>{
        const actual = tripherTest("Mk uieMscyoe", false);
        const expected = "Mickey Mouse";
        expect(actual).to.eql(expected);
    })
})
describe("tripher function should still work if string.length is not divisible by 3",()=>{
    it("Should encode a string with length indivisible by 3",()=>{
        const actual = tripherTest("kumquats");
        const expected = "kqtuusma|";
        expect(actual).to.eql(expected);
    })
    it("Should decode a string with length indivisible by 3",()=>{
        const actual = tripherTest("kqtuu|ma|", false);
        const expected = "kumquat";
        expect(actual).to.eql(expected);
    })
})
describe("tripher function should return false if no string is passed in",()=>{
    it("Should return false if no string is passed in",()=>{
        const actual = tripherTest();
        expect(actual).to.be.false;
    })
})
describe("tripher function should return false if encode input contains '|'",()=>{
    it("Should return false if '|' is passed in during encoding",()=>{
        const actual = tripherTest("We'll see you after the break | and here we are again, after the break");
        expect(actual).to.be.false;
    })
})
describe("tripher function should return false if any data type other than a string is passed in",()=>{
    it("Should return false if input is a data type other than a string",()=>{
        const actual = tripherTest(69);
        expect(actual).to.be.false;
    })
})