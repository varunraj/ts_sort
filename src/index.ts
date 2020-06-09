import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);

const charaCollection = new CharactersCollection("Varun");
const sortChar = new Sorter(charaCollection);
sortChar.sort();
console.log(charaCollection);
