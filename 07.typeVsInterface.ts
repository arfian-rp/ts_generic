/*
type != inteface

fitur           |type   |interface
----------------------------------
alias           |   1   |   0

object          |   1   |   1

merge           |   0   |   1

intersection
& union         |   1   |   0

implements      |   1   |   1

extends         |   0   |   1
----------------------------------

type cocok untuk variable atau function
interface cocok untuk class
*/

//Merge
interface P1 {
  name: string;
}
interface P1 {
  age: number;
}

let p1: P1 = {
  name: "default name",
  age: 0,
};

//intersection & union
type Pname = {
  name: string;
};
type Page = {
  age: number;
};
type Pintersection = Pname & Page;
type Punion = Pname | Page;

let p2a: Pintersection = {
  name: "default name",
  age: 0,
};
let p2b: Punion = {
  age: 0,
};
