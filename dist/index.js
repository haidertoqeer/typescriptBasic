"use strict";
// basic types
let id = 5;
let companyName = 'Company Name';
let isPublish = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'Hello', false];
// Tuple
let person = [1, 'hello', true];
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Down";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cide
let customerId = cid;
// Function
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5, 7))
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
