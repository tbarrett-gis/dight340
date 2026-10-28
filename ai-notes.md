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