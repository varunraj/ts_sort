import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);

const charaCollection = new CharactersCollection("Varun");
const sortChar = new Sorter(charaCollection);
sortChar.sort();
console.log(charaCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const llsorter = new Sorter(linkedList);
llsorter.sort();
console.log(linkedList);
