let imgObj = ["./OIP.jpeg", "./download.jpeg", "./img3.jpeg", "./img4.jpeg"]


let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let imgCont = document.querySelector(".img")

let i = 0;
console.log(imgObj.length);

// nextBtn.addEventListener("click", function () {
setInterval(() => {
    imgCont.innerHTML = `<img src=${imgObj[i]}>`
    i++;
    if (i > imgObj.length - 1) {
        i = 0;
    }
}, 1000)


// })
prevBtn.addEventListener("click", function () {
    imgCont.innerHTML = `<img src=${imgObj[i]}>`
    i--;
    if (i < 0) {
        i = imgObj.length - 1
    }
})