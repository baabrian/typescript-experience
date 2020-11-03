import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

const word = new CharacterCollection('dklwahjdklsjadkljas');
const sort = new Sorter(word);
const sorter = new Sorter(new NumbersCollection([10, 3, -5, 0]));

sort.sort();

console.log(sorter.collection);

console.log(sort.collection);
