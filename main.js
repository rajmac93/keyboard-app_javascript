let displayText = document.querySelector(".display");
const content = document.getElementById("content");
const symbol = document.querySelectorAll(".symbol");
const letters = document.querySelectorAll(".letter");
const polishLetter = document.querySelectorAll(".polish--letter");
const keyBackspace = document.querySelector(".key__backspace");
const keyTabulator = document.querySelector(".key__tabulator");
const keyCapsLock = document.querySelector(".key__casplock");
const keyEnter = document.querySelector(".key__enter");
const keyShift = document.querySelectorAll(".key__shift");
const specChar = document.querySelectorAll(".spec__char");
const specSecondChar = document.querySelectorAll(".spec__char--second");
const activeState = document.querySelectorAll(".active");
const keyAlt = document.querySelectorAll(".key__alt");
const acute = document.querySelectorAll(".acute");
const nonAcute = document.querySelectorAll(".non--acute");

//
//
//
//

let words;
let arrLetters = [];
let convertedArrayToString;

//
//
//
//

// * working part
function addLetterToDisplay() {
  // Adding button to display from keyboard
  // 1. Taking the text from the button, and then show this text in 'display'
  symbol.forEach((s) => {
    s.addEventListener("click", () => {
      words = s.innerHTML;
      arrLetters.push(words);
      convertedArrayToString = arrLetters.join("").toString();
      displayText.innerHTML = convertedArrayToString;
    });
  });
}
// * working part
function enterKeyAction() {
  keyEnter.addEventListener("click", () => {
    content.innerHTML += "<br>";
    arrLetters.push("<br>");
  });
}
// * working part
function backspaceKeyAction() {
  keyBackspace.addEventListener("click", () => {
    words = displayText.innerText;
    words = words.substring(0, words.length - 1);
    displayText.textContent = words;
    arrLetters.pop(); // deleting last element in arrLetters;
  });
}
// * working part
function altKeyAction() {
  let flag = true;
  keyAlt.forEach((key) => {
    key.addEventListener("click", function () {
      const displayAcute = flag ? "block" : "none";
      const displayNonAcute = flag ? "none" : "block";
      const pointerEventsLetters = flag ? "none" : "all";
      const disabledLetters = flag;

      acute.forEach((el) => (el.style.display = displayAcute));
      letters.forEach((el) => {
        el.disabled = disabledLetters;
        el.style.pointerEvents = pointerEventsLetters;
      });
      nonAcute.forEach((el) => (el.style.display = displayNonAcute));

      flag = !flag;
    });
  });
}
// * working part
function capsLockAction() {
  let flag = true;
  keyCapsLock.addEventListener("click", () => {
    const transform = flag
      ? (a) => a[0].toUpperCase()
      : (a) => a[0].toLowerCase();
    for (let el of [...letters, ...polishLetter]) {
      el.innerHTML = transform(el.innerHTML);
    }

    flag = !flag;
  });
}

//? need do repair
// function addTabulator() {
//   keyTabulator.addEventListener("click", () => {
//     words = keyTabulator.textContent;
//     arrLetters.push(words);
//     let convertedArrayToString = arrLetters.join("").toString();
//     displayText.innerHTML = convertedArrayToString;
//   });
// }

//? need do repair
// function shiftKeyAction() {
//   // let flag = true;

//   keyShift.forEach((key) => {
//     key.addEventListener("click", () => {
//       const transform = flag
//         ? (a) => a[0].toUpperCase()
//         : (a) => a[0].toLowerCase();
//       const displaySpecSecondChar = flag ? "block" : "none";
//       const displayActiveState = flag ? "none" : "block";

//       [...letters, ...polishLetter].forEach((el) => {
//         el.innerHTML = transform(el.innerHTML);
//       });

//       specSecondChar.forEach(
//         (el) => (el.style.display = displaySpecSecondChar)
//       );
//       activeState.forEach((el) => (el.style.display = displayActiveState));

//       flag = !flag;
//     });
//   });

//   symbol.forEach((el) => {
//     el.addEventListener("click", () => {
//       const transform = (a) => a[0].toLowerCase();
//       letters.forEach((el) => (el.innerHTML = transform(el.innerHTML)));
//       specSecondChar.forEach((el) => (el.style.display = "none"));
//       activeState.forEach((el) => (el.style.display = "block"));
//     });
//   });
// }

function shiftKeyAction() {
  let flag = true;

  const capital = (a) => a[0].toUpperCase();
  const reverseCapital = (a) => a[0].toLowerCase();
  const changeCase = (elements, func) =>
    elements.forEach((el) => (el.innerHTML = func(el.innerHTML)));
  const changeDisplay = (elements, display) =>
    elements.forEach((el) => (el.style.display = display));

  keyShift.forEach((key) => {
    key.addEventListener("click", () => {
      if (flag) {
        changeCase(letters, capital);
        changeCase(polishLetter, capital);
        changeDisplay(specSecondChar, "block");
        changeDisplay(activeState, "none");
      } else {
        changeCase(letters, reverseCapital);
        changeCase(polishLetter, reverseCapital);
        changeDisplay(specSecondChar, "none");
        changeDisplay(activeState, "block");
      }
      flag = !flag;
      console.log(`${flag} ale w keyshift.foreach`);
      symbol.forEach((sym) => {
        sym.addEventListener("click", function () {
          changeCase(letters, reverseCapital);
          changeDisplay(specSecondChar, "none");
          changeDisplay(activeState, "block");
          flag = !flag;
          console.log(`${flag} ale w symbol.foreach`);
        });
      });
    });
  });
}

addLetterToDisplay();
backspaceKeyAction();
capsLockAction();
enterKeyAction();
shiftKeyAction();
altKeyAction();
// addTabulator();
