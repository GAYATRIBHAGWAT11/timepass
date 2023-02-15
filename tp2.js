// console.log(x);
// var x=10

// function timepass(){
//     console.log(x);
//     var x=20
// }
// timepass()

function closure() {
    let a = 10;
    let b = 20;

    function closure2() {
        console.log(a + b);
    }
    return closure2;
}
let result = closure()
// console.log(result);
result()

// enter to atm
// wellcome
// punching card 2sec
// entering pin 5sec
// processing 7sec
//collect cash 2sec
// remove card 2sec
// thank you


function enterToAtm(welcome) {
    console.log("enter to atm");
    welcome(punchingCard)
}
function welcome(punchingCard) {
    setTimeout(() => {
        console.log("welcome");
        punchingCard(enterPin)
        // enterPin(processFn)
    }, 2000)
}
function punchingCard(enterPin) {
    setTimeout(() => {
        console.log("punching card");
        enterPin(processFn)
    }, 2000)
}

function enterPin(processFn) {
    setTimeout(() => {
        console.log("enter pin");
        processFn(cash)
    }, 5000)
}

function processFn(cash) {
    setTimeout(() => {
        console.log("processing.............");
        cash(removeCard)
    }, 7000)
}


function cash(removeCard) {
    setTimeout(() => {
        console.log("collect cash");
        removeCard(thankYou)

    }, 2000)
}


function removeCard(thankYou) {
    setTimeout(() => {
        console.log("remove card");
        thankYou()
    }, 2000)
}

function thankYou() {
    console.log("thank you");
}

enterToAtm(welcome)