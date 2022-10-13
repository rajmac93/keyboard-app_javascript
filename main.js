let displayText = document.querySelector(".display");
const symbol = document.querySelectorAll(".symbol");
const letters = document.querySelectorAll(".letter");
const polishLetter = document.querySelectorAll(".polish--letter");
const keyBackspace = document.querySelector(".key__backspace");
const keyTabulator = document.querySelector(".key__tabulator");
const keyCapsLock = document.querySelector(".key__casplock");
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

//
//
//
//

// * working part
function addLetterToDisplay() {
  // Adding button to display from keyboard
  // 1. Taking the text from the button, and then show this text in 'display'
  for (let i = 0; i < symbol.length; i++) {
    symbol[i].addEventListener("click", () => {
      words = symbol[i].innerHTML;
      arrLetters.push(words);

      let convertedArrayToString = arrLetters.join("").toString();
      displayText.innerHTML = convertedArrayToString;
    });
  }
}
// * working part
function backspaceKeyAction() {
  keyBackspace.addEventListener("click", () => {
    words = displayText.textContent;
    words = words.substring(0, words.length - 1);
    displayText.textContent = words;
    arrLetters.pop(); // deleting last element in arrLetters;
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
function capsLockAction() {
  let flag = true; // flag is needed to changing elements after clicking SHIFT buttons
  keyCapsLock.addEventListener("click", () => {
    // 1. do a UpperCase letters
    if (flag) {
      // changing to big letters
      function capital(a) {
        return a[0].toUpperCase();
      }
      for (el of letters) {
        el.innerHTML = capital(el.innerHTML);
      }
      // changing to big letters for polish letters
      function capital(a) {
        return a[0].toUpperCase();
      }
      for (el of polishLetter) {
        el.innerHTML = capital(el.innerHTML);
      }
      // specChars
      flag = !flag;
    } else if (!flag) {
      // changing to small letters
      function reverseCapital(a) {
        return a[0].toLowerCase();
      }
      for (el of letters) {
        el.innerHTML = reverseCapital(el.innerHTML);
      }
      // changing to small letters for polish letters
      function reverseCapital(a) {
        return a[0].toLowerCase();
      }
      for (el of polishLetter) {
        el.innerHTML = reverseCapital(el.innerHTML);
      }
      // specChars
      flag = !flag;
    }
  });
}

//? need do repair
function shiftKeyAction() {
  let flag = true; // flag is needed to changing elements after clicking SHIFT buttons
  for (let i = 0; i < keyShift.length; i++) {
    keyShift[i].addEventListener("click", () => {
      // 1. do a UpperCase letters
      if (flag) {
        // changing to big letters
        function capital(a) {
          return a[0].toUpperCase();
        }
        for (el of letters) {
          el.innerHTML = capital(el.innerHTML);
        }
        // changing to big letters for polish letters
        function capital(a) {
          return a[0].toUpperCase();
        }
        for (el of polishLetter) {
          el.innerHTML = capital(el.innerHTML);
        }
        // specChars
        for (let i = 0; i < specChar.length; i++) {
          specSecondChar[i].style.display = "block";
          for (let i = 0; i < activeState.length; i++) {
            activeState[i].style.display = "none";
          }
        }
        flag = !flag;
      } else if (!flag) {
        // changing to small letters
        function reverseCapital(a) {
          return a[0].toLowerCase();
        }
        for (el of letters) {
          el.innerHTML = reverseCapital(el.innerHTML);
        }
        // changing to small letters for polish letters
        function reverseCapital(a) {
          return a[0].toLowerCase();
        }
        for (el of polishLetter) {
          el.innerHTML = reverseCapital(el.innerHTML);
        }
        // specChars
        for (let i = 0; i < specChar.length; i++) {
          specSecondChar[i].style.display = "none";
          for (let i = 0; i < activeState.length; i++) {
            activeState[i].style.display = "block";
          }
        }

        flag = !flag;
      }

      //
      //
      // returning to small lettters and specials chars after clicking something (nie działa za dobrze, trzeba kliknąć dwa razy shift potem :/)
      for (let i = 0; i < symbol.length; i++) {
        symbol[i].addEventListener("click", function () {
          function reverseCapital(a) {
            return a[0].toLowerCase();
          }
          for (el of letters) {
            el.innerHTML = reverseCapital(el.innerHTML);
          }
          for (let i = 0; i < specChar.length; i++) {
            specSecondChar[i].style.display = "none";
            for (let i = 0; i < activeState.length; i++) {
              activeState[i].style.display = "block";
            }
          }
        });
      }

      //

      for (let i = 0; i < symbol.length; i++) {
        symbol[i].addEventListener("click", function () {
          function reverseCapital(a) {
            return a[0].toLowerCase();
          }
          for (el of letters) {
            el.innerHTML = reverseCapital(el.innerHTML);
          }
          for (let i = 0; i < specChar.length; i++) {
            specSecondChar[i].style.display = "none";
            for (let i = 0; i < activeState.length; i++) {
              activeState[i].style.display = "block";
            }
          }
        });
        return;
      }
    });
  }
}

function altKeyAction() {
  let flag = true;
  for (let i = 0; i < keyAlt.length; i++) {
    keyAlt[i].addEventListener("click", function () {
      if (flag) {
        for (let i = 0; i < acute.length; i++) {
          acute[i].style.display = "block";
        }
        for (let i = 0; i < letters.length; i++) {
          letters[i].disabled = true;
          letters[i].style.pointerEvents = "none";
        }
        for (let i = 0; i < nonAcute.length; i++) {
          nonAcute[i].style.display = "none";
        }
        flag = !flag;
      } else {
        for (let i = 0; i < acute.length; i++) {
          acute[i].style.display = "none";
        }
        for (let i = 0; i < letters.length; i++) {
          letters[i].disabled = false;
          letters[i].style.pointerEvents = "all";
        }
        for (let i = 0; i < nonAcute.length; i++) {
          nonAcute[i].style.display = "block";
        }
        flag = !flag;
      }
    });
  }
}

addLetterToDisplay();
backspaceKeyAction();
capsLockAction();
shiftKeyAction();
altKeyAction();
addTabulator();
