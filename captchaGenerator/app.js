let captcha = document.querySelector(".captcha")
let reloadBtn = document.querySelector(".reload-btn")
let inputField = document.querySelector(".input-area input")
let checkBtn = document.querySelector(".check-btn")
let statusTxt = document.querySelector(".status-text")



let allChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function getCaptch() {
    for (let i = 0; i < 6; i++) {
        let randomChar = allChar[Math.floor(Math.random() * allChar.length)]
        captcha.innerText += `${randomChar}`;

    }
}
getCaptch()
reloadBtn.addEventListener("click", () => {
    removeContent()
    getCaptch()
})


checkBtn.addEventListener("click", e => {
    e.preventDefault()
    statusTxt.getElementsByClassName.display = "block"
    let inputVal = inputField.ariaValueMax.split("").join("")
    if (inputVal == captcha.innerText) {
        statusTxt.getElementsByClassName.color = "#4db2ec"
        statusTxt.innerText = "Nice! you dont appear to be a robot"
        setTimeout(() => {
            removeContent()
            getCaptch()
        }, 2000)
    } else {
        statusTxt.getElementsByClassName.color = "#ff0000";
        statusTxt.innerText = "captcha not matched. please try again";
    }
})


function removeContent() {
    inputField.value = "";
    captcha.innerText = ""
    statusTxt.getElementsByClassName.display = "none";
}