# NOTES — S02 · Render the Party

## Intent
The point of this exercise is to (as described in our creative title) render a party of Pokemon so that a trainer could see what characters are available, "train" them by increasing their level, and remove them as necessary. This will be done by finding the JavaScript array and rendering its elements on the page by adding it to the tree (DOM), and then interacting (listening) with it.

## AI Use
I had AI (Claude Code, v2.1.327, Opus 5.5) act as my moderator as I initialized the spark and wrote the code. Initially I had it plan the program and write the majority of the code, but it gave me the whole `function render()` to complete myself. Because I understood conceptually how to start but didn't understand the syntax, I had it give me console commands I could use in devtools to conduct similar work and then used that code to create my own function. It also helped redline my mistakes when I hit a bug and couldn't figure out what was wrong (I passed the wrong variable, or misspelled something, etc.).

Some examples of usage include: 
  "Trouble now is that the levelup function doesnt work bc of an uncaught error: 
  `party.js:48 Uncaught TypeError: Cannot read properties of undefined (reading 'level')
        at levelUp (party.js:48:25)
        at HTMLButtonElement.<anonymous> (party.js:35:49)` 
  Also, stuff that doesn't have a nickname is still undefined. How do we iron that out? Also how do I get each unordered list to wrap newline without having to write substantial css (do I need to for the scope of this assignment)?"
Which shows how I did my best to use devtools and past code to try to figure out what I could, and then have Claude walk me through proper patching and debugging.

## Accepted / Changed / Rejected
I accepted all initial code that Claude gave me when initializing the spark. When it came to the actual function that I was responsible for, I found that a couple of pointers or suggestions that Claude gave me didn't make sense and so I wrote them myself and asked Claude to help me debug them to communicate where I had misunderstood its pointers. I rejected its unclear suggestion about how to append `levelButton` and `removeButton` to `li` because it was redundant and came up with a better patch after consulting with Claude. I also critiqued initial css layout that improperly wrapped the list and had Claude redo that bit.

The largest section that I implemented the most accepted / changed / rejected code was in the Human (To-Do) section which block resulted in:
```
function render() {
  list.replaceChildren(); // clear the old picture before drawing a new one

  for (const member of party) {
    const li = document.createElement("li");
    let intro;
    if (member.nickname) {
      intro = `${member.nickname} the ${member.name}, level ${member.level}`;
    } else {
      intro = `${member.name}, level ${member.level}`;
    }
    const label = document.createElement("p");
    label.textContent = intro;

    const levelButton = document.createElement("button");
    levelButton.textContent = `Level Up ${displayName(member)}`;
    levelButton.className = `level-up-button`;
    levelButton.addEventListener("click", () => levelUp(member.id));

    const removeButton = document.createElement("button");
    removeButton.textContent = `Remove ${displayName(member)}`;
    removeButton.className = `remove-button`;
    removeButton.addEventListener("click", () => removeMember(member.id));

    li.append(label, levelButton, removeButton);
    list.append(li);
  }

  emptyMessage.hidden = party.length !== 0;
}
```
initially Claude suggested that I use a `for... of` loop, which I accepted alongside its conceptual suggestion to implement its flow of using a constant, then a `label.textContent`, then build the buttons, and then append the lists. I rejected the itial implementation of how to parse the names and nicknames and instead borrowed a block from my archived `exercise05.js` and refitted it to use a `let` statement to write an `intro` text to better introduce the members by their nickname, species, and level. 

## Dig Deeper
For this section, Claude asked me, "Suppose you delete the list.replaceChildren(); line, and your loop is written so the page shows all 6 members. You press "Level up Sparky" once. 1. How many `<li>`s are on the page now, and what do they say? and 2. Where does focus land? (Look closely at how `levelUp` picks a button: `querySelectorAll('.level-up-button')[index]`.) and then had me guess what would happen. My answer was that it would return duplicate entires (12 total) and that the focus would land on the old list. I also read `https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren` as part of this portion.

I also decided to do an additional `/dig-deeper` about the difference between `createElement` and `innerHTML`. In this case, using `createElement` + `textContent` makes more sense given its ability to treat it as raw text after being rendered as an object instead of parsing a string as HTML and using it with its associated tags. To test this, Claude prompted me thus:
  In your party array, change Doug's nickname to:
  `nickname: '<em>Doug</em>'`
  and reload.

  1. With your current code (`label.textContent = intro`), what exactly appears on the page for Psyduck?
  2. If you changed that one line to `label.innerHTML = intro`, what would appear instead?
  3. (Bonus) After step 2, what does the "Level Up" button for Psyduck say? It still uses `textContent`.
To which I responded that it initially renders `<em>Doug</em>` on the page, but after implementing the `label.innerHTML = intro` then it would render as italics.

## Open Questions
Is there a specific benefit to rebuilding every button upon `render()` which is the default? Isn't this what we also discussed about Svelte that it can manage to update just one feature instead of all (or is that something else)? and is there a place that you would want to re-render the whole thing or just an element, and is there a way to do that in vanilla js?

## /Check Results (sparks/s02-render-party)

### NOTES.md
- ✅ Title names the assignment (S02)
- ✅ All five sections present, no template text left
- ✅ No `TODO(human)` markers left in the code
- ✅ AI use names the tool and quotes a real prompt
- ✅ Accepted / changed / rejected includes the TODO(human) code and why
- ✅ Dig deeper includes an MDN link

### Done Requirements
- ✅ index.html + party.js loaded with `defer`
- ✅ Party is an array of objects; the list is built from it, nothing hard-coded
- ✅ Each member has real `<button>`s (Level up, Remove); mouse + Tab/Enter/Space
- ✅ Visible text changes (level number + status message)
- ✅ Focus stays visible; after a remove it moves to the next Remove button, or the heading when the party is empty
- ✅ No console errors; `const`/`let` and `===` only
- ✅ Hub index.html links to it under Sparks
- ✅ Committed (5a9698c), pushed, live at https://tbarrett-gis.github.io/dight340/sparks/s02-render-party/

### Accessibility Basics
- ✅ header/main/footer landmarks; h1 → h2 heading order
- ✅ Real buttons with distinct names; visible :focus-visible outline
- ✅ role="status" announces changes to screen readers
- ✅ rem-based layout, no fixed px sizes (OK at 200% zoom)