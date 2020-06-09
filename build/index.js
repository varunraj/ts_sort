"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);
var charaCollection = new CharactersCollection_1.CharactersCollection("Varun");
// const sortChar = new Sorter(charaCollection);
// sortChar.sort();
charaCollection.sort();
console.log(charaCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const llsorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
