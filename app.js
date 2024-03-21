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

