
let score = 0
let cross = true;

let audio = new Audio("sfx-defeat1.mp3")
let audiogo = new Audio("doremonSong.mp3")

setTimeout(() => {
    audiogo.play()
}, 1000)

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
    // console.log(offsetX, offsetY);
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML="Game over";
        obstacle.classList.remove("obstacleAni")

        audio.play();
        setTimeout(()=>{
           audio.pause() 
        },5000)
    }
    else if (offsetX < 145 && cross) {  //random num=>145
        score += 1
        updateScore(score)
        cross = false;

        setTimeout(() => {
            cross = true
        }, 1000)
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's'
        }, 500)
    }

}, 10)


function updateScore(score) {
    scoreCont.innerHTML = "your score: " + score;

}