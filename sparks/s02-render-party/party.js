// ---- DATA ----
// The party lives here, in JavaScript. The page is a picture of this array.
// `let` (not const) because removeMember() replaces it with a filtered copy.
let party = [
  { id: 25, name: "pikachu", level: 16, nickname: "Sparky" },
  { id: 54, name: "psyduck", level: 15, nickname: "Doug" },
  { id: 143, name: "snorlax", level: 30 },
  { id: 4, name: "charmander", level: 12, nickname: "Toasty" },
  { id: 92, name: "gastly", level: 25, nickname: "Boo" },
  { id: 39, name: "jigglypuff", level: 10 },
];

// ---- FIND: grab the elements we need once ----
const list = document.querySelector("#party");
const heading = document.querySelector("#party-heading");
const emptyMessage = document.querySelector("#empty-message");
const status = document.querySelector("#status");

// Nickname if there is one, otherwise the species name.
function displayName(member) {
  return member.nickname ?? member.name;
}

// ---- RENDER: turn the array into list items ----
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

// ---- HANDLERS: change the DATA, then re-render ----
function levelUp(id) {
  const index = party.findIndex((member) => member.id === id);
  const member = party[index];
  member.level = member.level + 1;
  status.textContent = `${displayName(member)} is now level ${member.level}.`;

  render();

  // render() rebuilt every button, so the one you pressed is gone.
  // Put focus on the new "Level up" button in the same spot.
  list.querySelectorAll(".level-up-button")[index].focus();
}

function removeMember(id) {
  const index = party.findIndex((member) => member.id === id);
  const removed = party[index];
  party = party.filter((member) => member.id !== id);
  status.textContent = `${displayName(removed)} left the party.`;

  render();

  // Focus the Remove button that slid into this spot (or the last one).
  // If nobody is left, focus the heading so focus doesn't fall to <body>.
  const removeButtons = list.querySelectorAll(".remove-button");
  if (removeButtons.length === 0) {
    heading.focus();
  } else {
    removeButtons[Math.min(index, removeButtons.length - 1)].focus();
  }
}

// Draw the page once when it loads.
render();
