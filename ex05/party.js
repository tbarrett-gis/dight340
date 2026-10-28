const party = [
  { id: 25, name: 'pikachu', level: 16, nickname: 'Sparky',
    moves: ['thunder-shock', 'growl', 'thunder-wave', 'quick-attack'] },
  { id: 54, name: 'psyduck', level: 15, nickname: 'Doug', moves: ['scratch'] },
  { id: 143, name: 'snorlax', level: 30, moves: ['headbutt', 'amnesia', 'rest'] },
  { id: 4, name: 'charmander', level: 12, nickname: 'Toasty', moves: ['scratch', 'growl', 'ember'] },
  { id: 92, name: 'gastly', level: 25, nickname: 'Boo', moves: ['lick', 'confuse-ray', 'night-shade'] },
  { id: 39, name: 'jigglypuff', level: 10, moves: ['sing', 'pound'] },
];


// STEP 1 - Write labels(party) with map
console.log("\n---- STEP 1 ----\n")
function labels(party) {
  return party.map((character) => {
    if (character.nickname) {
      return `${character.nickname} the ${character.name} (level ${character.level})`
    }
    return `${character.name} (level ${character.level})`
  })
};
console.log(labels(party));
  // prints the formatted party: 
  // ---- STEP 1 ---- 
  // [
  //   'Sparky the pikachu (level 16)',
  //   'Doug the psyduck (level 15)',
  //   'snorlax (level 30)',
  //   'Toasty the charmander (level 12)',
  //   'Boo the gastly (level 25)',
  //   'jigglypuff (level 10)'
  // ]


// STEP 2 - Write atLeast(party, level) with filter
console.log("\n---- STEP 2 ----\n")
function atLeast(party, level) {
  return party.filter((character) => (character.level) >= level);
}
console.log(atLeast(party, 16));
  // prints all three pokemon, pikachu, snorlax, and gastly: 
  // ---- STEP 2 ---- 
  // [
  //   {
  //     id: 25,
  //     name: 'pikachu',
  //     level: 16,
  //     nickname: 'Sparky',
  //     moves: [ 'thunder-shock', 'growl', 'thunder-wave', 'quick-attack' ]
  //   },
  //   {
  //     id: 143,
  //     name: 'snorlax',
  //     level: 30,
  //     moves: [ 'headbutt', 'amnesia', 'rest' ]
  //   },
  //   {
  //     id: 92,
  //     name: 'gastly',
  //     level: 25,
  //     nickname: 'Boo',
  //     moves: [ 'lick', 'confuse-ray', 'night-shade' ]
  //   }
  // ]


// STEP 3 - Write totalMoves(party) and averageLevel(party) with reduce
console.log("\n---- STEP 3 ----\n")
function totalMoves(party) {
  return party.reduce((sum, character) => sum + character.moves.length, 0);
};
function averageLevel(party) {
  const total = party.reduce((sum, character) => sum + character.level, 0);
  return total / party.length;
};
console.log(totalMoves(party));
console.log(averageLevel(party));
  // prints:
  // ---- STEP 3 ---- 
  // 16
  // 18


// STEP 4 - Write makeLevelCheck(min), returns Pokemon with a level higher than 20
console.log("\n---- STEP 4 ----\n")
function makeLevelCheck(min) {
  return (character) => character.level >= min;
};
console.log(party.filter(makeLevelCheck(20)));
  // prints: 
  // ---- STEP 4 ----
  // [
  //   {
  //     id: 143,
  //     name: 'snorlax',
  //     level: 30,
  //     moves: [ 'headbutt', 'amnesia', 'rest' ]
  //   },
  //   {
  //     id: 92,
  //     name: 'gastly',
  //     level: 25,
  //     nickname: 'Boo',
  //     moves: [ 'lick', 'confuse-ray', 'night-shade' ]
  //   }
  // ]


// STEP 5 - Write byLevel(party), returns the party sorted from highest level to lowest
console.log("\n---- STEP 5 ----\n")
console.log("From Highest to Lowest:\n")
function byLevel(party) {
  return party.toSorted((a, b) => b.level - a.level);
};
console.log(byLevel(party))
console.log("\nOriginal Order:\n")
console.log(party);
  // ---- STEP 5 ----
  // From Highest to Lowest:
  // [
  //   {
  //     id: 143,
  //     name: 'snorlax',
  //     level: 30,
  //     moves: [ 'headbutt', 'amnesia', 'rest' ]
  //   },
  //   {
  //     id: 92,
  //     name: 'gastly',
  //     level: 25,
  //     nickname: 'Boo',
  //     moves: [ 'lick', 'confuse-ray', 'night-shade' ]
  //   },
  //   {
  //     id: 25,
  //     name: 'pikachu',
  //     level: 16,
  //     nickname: 'Sparky',
  //     moves: [ 'thunder-shock', 'growl', 'thunder-wave', 'quick-attack' ]
  //   },
  //   {
  //     id: 54,
  //     name: 'psyduck',
  //     level: 15,
  //     nickname: 'Doug',
  //     moves: [ 'scratch' ]
  //   },
  //   {
  //     id: 4,
  //     name: 'charmander',
  //     level: 12,
  //     nickname: 'Toasty',
  //     moves: [ 'scratch', 'growl', 'ember' ]
  //   },
  //   { id: 39, name: 'jigglypuff', level: 10, moves: [ 'sing', 'pound' ] }
  // ]

  // Original Order:

  // [
  //   {
  //     id: 25,
  //     name: 'pikachu',
  //     level: 16,
  //     nickname: 'Sparky',
  //     moves: [ 'thunder-shock', 'growl', 'thunder-wave', 'quick-attack' ]
  //   },
  //   {
  //     id: 54,
  //     name: 'psyduck',
  //     level: 15,
  //     nickname: 'Doug',
  //     moves: [ 'scratch' ]
  //   },
  //   {
  //     id: 143,
  //     name: 'snorlax',
  //     level: 30,
  //     moves: [ 'headbutt', 'amnesia', 'rest' ]
  //   },
  //   {
  //     id: 4,
  //     name: 'charmander',
  //     level: 12,
  //     nickname: 'Toasty',
  //     moves: [ 'scratch', 'growl', 'ember' ]
  //   },
  //   {
  //     id: 92,
  //     name: 'gastly',
  //     level: 25,
  //     nickname: 'Boo',
  //     moves: [ 'lick', 'confuse-ray', 'night-shade' ]
  //   },
  //   { id: 39, name: 'jigglypuff', level: 10, moves: [ 'sing', 'pound' ] }
  // ]