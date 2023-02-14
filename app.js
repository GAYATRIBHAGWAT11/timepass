let person = {
    name: 'adam',
    age: 23,

    address: {
        city: "nashik",
        state: "mh"
    }
}

// let person2={...person}
// person2.address.state="mp"

let person3 = JSON.parse(JSON.stringify(person))
person3.address.city = "singapore"
// console.log(person);
// console.log(person3);

let a = {}
let b = a
let c = {}
console.log(a == c);   //false  bcz memory add is diffrenct
console.log("a+b" + a == b);   //false
console.log(a == a);   //true




function closure() {
    let a = 20;
    let b = 4635;

    function closure2() {
        console.log(a + b);
    }
    return closure2
}
let final = closure()
final()


console.log(null) //null
console.log(+null)  //0

console.log(undefined); //undefined
console.log(+undefined) //NaN

console.log(NaN);  //NaN
console.log(+NaN);  //NaN

console.log(Math.max())  //-Infinity
console.log(Math.min())  //Infinity
console.log(typeof NaN.toString() === "string") //ttrue


let data = []

function asyncAwait() {
    return new Promise((resolve, reject) => {

        data.push(1, 2, 3, 4, 5, 6)
        console.log(data);
        let err = false

        if (!err) {
            resolve()
        } else {
            reject("noting is working")
        }
    })
}

async function start() {
    await asyncAwait()
}
start()




let obj = {
    fruitName: "dragonfruit",
    color: "pink"
}

let finalResult = function printDetails(price, state) {
    console.log(`i love ${this.fruitName} and its color ${this.color} with price ${price} which grows in ${state}`);
}

finalResult.call(obj, "300kg")
finalResult.apply(obj, ["500kg", "MH"])
let result = finalResult.bind(obj, ["10000kg", "MP"])
result()




let object = {
    name: "gayatri bhagwat",
}
let object2 = {
    city: "nashik"
}

object2.__proto__ = object

console.log(object2.name);


let p1 = Promise.resolve(200)
let p2 = 400
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "gayatri")
})
Promise.all([p1, p2, p3]).then(function (val) {
    console.log(val);
})



class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age
    }
}

class Person2 extends Person {
    constructor(_name,_age,_occ) {
        super(_name, _age)
        this.occupation = _occ


    }
}

// let PersonResult=new Person("gayatri", 22)

let personDetail = new Person2("aishwarya", 23, "full stack developer")
console.log(personDetail);