// TODO: write your code here
import setUpAttacks from './setUpAttacks';

const characters = [
  { name: 'маг', health: 15 },
  { name: 'лучник', health: 10 },
  { name: 'мечник', health: 20 },
];

console.log('Initial state is ', characters);

const attacks = setUpAttacks(characters);

attacks[0](9); // атакуем мага 9 баллами урона

console.log(characters);

attacks[1](10); // атакуем мага 9 баллами урона

console.log(characters);

attacks[2](8); // атакуем лучника 9 баллами урона

console.log(characters);
