// let x=(Math.random()*100)
// console.log(x);



let colors = ["green", "red", "yellow", "brown"]

let btn = document.getElementById("btn")
let color = document.querySelector(".color")



btn.addEventListener('click', function () {
    let randomNum = getRandomNumber()

    document.body.style.backgroundColor = color[randomNum]
    color.textContent = colors[randomNum]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}