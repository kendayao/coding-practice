// h2El=$("<h2>")
// h2El.text("Hello World, this is jquery")
// h2El.attr("class", "text")
// $(".container-one").append(h2El)


function Bellboy (name, age){
    this.name=name
    this.age=age
}

const bellBoy1 = new Bellboy ("Ken", 24)

console.log(bellBoy1.name)


var fruits = ["apples", "oranges", "bananas", "grapes"]

var chosenFruit = fruits[2]
console.log(chosenFruit)



for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    console.log(fruits.length)
}


function add (a,b){
    return a+b
}

console.log(add(4,5))

const numArray = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = numArray.filter(number => {
    return number%2==0
    })

console.log(evenNumbers)


var row = $("<div")
row.addClass("pracice")
row.append("this is practice")
$("container-one").append(row)