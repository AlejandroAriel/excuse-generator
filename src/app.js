/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let resultado = document.querySelector("#excuse");
  resultado.innerHTML = excusa();
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
const randomElementWho = who[Math.floor(Math.random() * who.length)];
const randomElementaction = action[Math.floor(Math.random() * action.length)];
const randomElementWhat = what[Math.floor(Math.random() * what.length)];
const randomElementWhen = when[Math.floor(Math.random() * when.length)];

function excusa() {
  return (
    randomElementWho +
    randomElementaction +
    randomElementWhat +
    randomElementWhen
  );
}
