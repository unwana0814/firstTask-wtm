const headingEl = document.getElementById("heading");
// console.log(headingEl);

const greeting = ["Hello World!!"];

let greetingIndex = 0;

let headingTextIndex = 0;

text();

function text(){
    headingEl.innerText = `${greeting[greetingIndex].slice(0, headingTextIndex)}`;
    headingEl.style.fontSize = 40 + "px"
    headingTextIndex++;
    setTimeout(text, 300)
}


