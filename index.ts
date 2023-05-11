import { Option, Some, isSome } from "fp-ts/lib/Option";
import { Minion, Boss } from "./interface";
import { some } from "fp-ts/option";

const bob: Minion = {
  name: "Bob",
  eyeCount: 2,
};

const dave: Minion = {
  name: "Dave",
  eyeCount: 2,
};

const tRexBoss: Boss = {
  name: "Rex",
  isAlive: false,
};

const mayBeBob = some(bob);
const mayBeTRex = some(tRexBoss);

console.log(bob === dave); // this should be comparable
// console.log(bob === tRexBoss); // this should be error

console.log(mayBeBob === mayBeTRex); // this should be error, but nooo
