
let score = 0

document.onkeydown = function (e) {
    console.log("key code is", e.keyCode);
    if (e.keyCode == 38) {
        nobita = document.querySelector('.nobita')
        nobita.classList.add("animateNobita")
        setTimeout(() => {
            nobita.classList.remove("animateNobita")
        }, 700);
    }
    if (e.keyCode == 39) {
        nobita = document.querySelector('.nobita')
        nobitaX = parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'))
        nobita.style.left = nobitaX + 112 + "px"
    }

    if (e.keyCode == 37) {
        nobita = document.querySelector('.nobita')
        nobitaX = parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'))
        nobita.style.left = (nobitaX - 112) + "px"
    }
}


setInterval(() => {
    nobita = document.querySelector(".nobita")

    gameOver = document.querySelector(".gameOver")
    obstacle = document.querySelector(".obstacle")

    nx = parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'))
    ny = parseInt(window.getComputedStyle(nobita, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))


    offsetX = Math.abs(nx - ox)
    offsetY = Math.abs(ny - oy)
    console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstacleAni")
    }
    else {
        score += 1
    }

}, 100)