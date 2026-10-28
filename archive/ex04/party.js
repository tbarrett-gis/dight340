const party = [
  { id: 25, name: 'pikachu', level: 16, nickname: 'Sparky',
    moves: ['thunder-shock', 'growl', 'thunder-wave', 'quick-attack'] },
  { id: 54, name: 'psyduck', level: 15, nickname: 'Doug', moves: ['scratch'] },
  { id: 143, name: 'snorlax', level: 30, moves: ['headbutt', 'amnesia', 'rest'] },
];

// addMove function
function addMove(pokemon, move) {
  const oldMoves = pokemon.moves;
  const newMoves = [...oldMoves, move];
  const newPokemon = {...pokemon, moves: newMoves};
  return newPokemon;
}
const oldPsyduck = party[1];
const newPsyduck = addMove(party[1], 'tail-whip');
console.log(oldPsyduck);
console.log(newPsyduck);

// describe function
function describe({ name, level, nickname = 'none' }) {
  return `${name} (level ${level}), nickname: ${nickname}`;
}
const describeSnorlax = describe(party[2]);
console.log(describeSnorlax);

for (const [key, value] of Object.entries(party[2])) {
  console.log(`${key}: ${value}`);
};