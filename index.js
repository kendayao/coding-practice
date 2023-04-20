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
    h3El=$("<h3>")
    h3El.text(fruits[i])
    h3El.attr("class", "text")
    $(".container-one").append(h3El)
}