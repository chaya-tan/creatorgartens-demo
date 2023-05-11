"use strict";
exports.__esModule = true;
var option_1 = require("fp-ts/option");
var bob = {
    name: "Bob",
    eyeCount: 2
};
var dave = {
    name: "Dave",
    eyeCount: 2
};
var tRexBoss = {
    name: "Rex",
    isAlive: false
};
var mayBeBob = (0, option_1.some)(bob);
var mayBeTRex = (0, option_1.some)(tRexBoss);
console.log(bob === dave); // this should
// console.log(bob === tRexBoss);
console.log(mayBeBob === mayBeTRex); // not alarm "no overlap"
