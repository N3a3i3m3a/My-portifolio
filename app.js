const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

bar.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    bar.classList.toggle("bg-white")
  })
})



words = ["Frontend designer,", "GIS analyst,", "and Architectural designer"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const wordDelay = 1000; 
function typeWord() {
  if (charIndex < words[wordIndex].length) {
    document.getElementById('typing-text').innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, typingSpeed);
  } else {
    setTimeout(eraseWord, wordDelay);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    const currentText = words[wordIndex].substring(0, charIndex - 1);
    document.getElementById('typing-text').innerHTML = currentText;
    charIndex--;
    setTimeout(eraseWord, typingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, typingSpeed);
  }
}

typeWord();




