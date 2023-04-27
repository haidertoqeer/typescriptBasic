// basic types

let id:number = 5
let companyName: string = 'Company Name'
let isPublish: boolean = true
let x : any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'Hello', false]

// Tuple

let person : [number, string, boolean] = [1,'hello', true]

// Tuple array
let employee : [number, string][]
employee = [
    [1 , 'Brad'],
    [2 , 'John'],
    [3 , 'Jill']
]

// Union
let pid: string | number

pid = 22

// Enum

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Down'
}

// console.log(Direction2.Left)

// Objects

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion

let cid : any = 1
// let customerId = <number>cide

let customerId = cid as number

// Function

function addNum(x:number, y:number) : number{
    return x + y
}

// console.log(addNum(5, 7))

// Void

function log(message: string | number) : void {
    console.log(message)
}

// Interfaces

interface UserInterface {
    id: number
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}