# Declaration of AI Use, by Exercise

## Exercise 2: No AI Usage in Exercise 2

## Exercise 3

**Tool:** Anthropic Claude (Claude Code, Opus 5.5). Instructed not to write my code, only to explain and help me find and fix syntax.

**Prompts:**
- "Walk me thru what is wrong about this logic and syntax `Code Inserted Here`, tell me where it is wrong and give me tips to help fix it."
- "I can't get the structure ruight on the loop, help me figure out how to loop thru each student and then send the scores thru the rounding function."
- "Give me some templates of how a different function with similar properties will work so I can fix syntax, compare to `Code Inserted`."
- "help me identify step by step what to fix and how… dont give me the code"
- "Why does it show 80.44444444444444… how do I fix the rounding?"

**Used for:** Finding why my functions never ran (they were defined but never called, thus leaving devtools empty in the console... why I turned to AI because there were no errors being thrown and I was totally lost on format). Also used to learn how return values pass from one function into the next; regrouping scores by student into an array of objects and looping with `for...of`; step-by-step fixes for scope/order errors (`details`/`r` used outside the loop, helped me fix my code by ditching `const` in favor of `let`), the `places` default parameter; debugging the class average (I passed `classTotal / 2` as `places` instead of `2`).

**Changed/Rejected:** Claude initially suggested I use a `.push()`/array approach, which I didn't use. After providing some explanation, I consulted MDN and critiqued Caldue's suggestions. Built the report with a `let` string and `+=` instead, and summed raw averages into a `classTotal` variable. I typed all code myself.

## Exercise 4

**Tool:** Anthropic Claude (Claude Code, Opus 5.5). Instructed not to write my code, only to explain and help me find and fix syntax.

**Prompts:**
- "I already have party.js set up, and I took a stab at getting the addMove function up, but I am struggling to understand the syntax of `describe({ name, level, nickname = 'none' })`, but I don't understand where it is supposed to go or how to implement it (in the loop?). I am also rusty on destructuring and need you to walk me through this."
- "I wrote the whole addMoves function which I think I may have gotten close to, but I'm getting mixed up with the syntax of what goes in the parenthesis of function addMode(x) and how to call that later, can you elucidate that for me? I also think I nailed the describe function, but I can't actually check because node is giving me grief in the terminal (I have node v26 but I have a module error so it won't read the party.js, could you help me fix that so I can read the output of the javascript file?) `Inserted Error Message Here`"
- "Could you give me an example that is syntactically designed to do what we are wanting so I can understand how it breaks down? I already fixed the addMove function to call the correct const and return the `bonusMove` but then the `console.log` breaks because of syntax (where am I going wrong?). I also understand what you are talking about passing an array thru the `object.entries` bit at the bottom but I don't understand what to pass instead."
- "help me identify step by step what to fix and how… dont give me the code"
- "I now think I understand the addParty, now that you helped me identify that you need to create several "shells" where you intialize the function with the old moves going into new moves going into the array that goes into returning the object hosting the array. check my work. I still don't understand how we are to integrate the describe function with lines 16-19, which is to check that addMoves is correct, or is the describe function independent and I need to work on that next? I also still haven't figured out what to replace "moves" with in `for (const [key, value] of Object.entries(moves))`, explain that conceptually to me."

**Used for:** Fixing a `MODULE_NOT_FOUND` error (I was running node from the ex03 folder instead of ex04). Learning parameters vs. arguments and how to call a function with one Pokémon by index (`party[1]`); why `party.moves` was undefined (`party` is the whole array, not one Pokémon); using spread to copy the moves array and then the Pokémon object so the original stays unchanged; why my `console.log` never ran (it came after `return`). Understanding destructuring with a default inside `describe`'s parameter list, and that `describe` was defined but never called. Learning that `Object.entries` needs one object, not `party` or a bare `moves`, and how `[key, value]` destructures each pair. Final check of my work against the requirements.

**Changed/Rejected:** I implemented some syntax after watching Claude introduce proper implementation in a different context, took several suggestions mentioned in the used for section, and then referenced MDN for anything else it mentioned that I didn't understand.