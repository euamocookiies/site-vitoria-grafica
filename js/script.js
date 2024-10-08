let ul = document.querySelector("ul");
let hamburguer = document.querySelector(".hamburguer");
let close = document.querySelector(".close");


// hamburguer.addEventListener("click", () => {
//    ul.classList.add("show");
//    close.classList.add("aparece");
//    hamburguer.classList.add("some")

// })

hamburguer.addEventListener("click", () => {

    ul.classList.toggle("show")
})

