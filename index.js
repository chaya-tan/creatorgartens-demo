"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_1 = require("fp-ts/option");
var bob = {
    name: "Bob",
    eyeCount: 2,
};
var dave = {
    name: "Dave",
    eyeCount: 2,
};
var tRexBoss = {
    name: "Rex",
    isAlive: false,
};
var mayBeBob = (0, option_1.some)(bob);
var mayBeTRex = (0, option_1.some)(tRexBoss);
console.log(bob === dave); // this should be comparable
// console.log(bob === tRexBoss); // this should be error
console.log(mayBeBob === mayBeTRex); // this should be error, but nooo
