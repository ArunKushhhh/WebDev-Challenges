const emoji = document.querySelector("#emoji");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😁",
  "🤑",
  "🤨",
  "😊",
  "🙂",
  "😚",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😦",
  "😇",
  "😳",
  "😌",
  "😖",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🫢",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😄",
  "😁",
  "😬",
];

console.log(emojis);
emoji.addEventListener("mouseover", ()=> {
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
    //to get anything random in JS Math.random()*fromWhereYouwantThatRandomThingToBe is used
})