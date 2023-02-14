let imgObj = ["./OIP.jpeg", "./download.jpeg", "./img3.jpeg", "./img4.jpeg"]


let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let imgCont = document.querySelector(".img")

let i = 0;
console.log(imgObj.length);
nextBtn.addEventListener("click", function () {

    if (i < imgObj.length) {
        imgCont.innerHTML = `<img src=${imgObj[i]}>`
        i++
    }
})



prevBtn.addEventListener("click", function () {

    if (i >= 0) {
        imgCont.innerHTML = `<img src=${imgObj[i]}>`
        i--
    }
})