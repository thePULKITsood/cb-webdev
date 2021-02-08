// --------------------------

// json objects

// create objects without defining the class

// one way of creating java script object - also called json object
// java script object notation

var bird = {
    x: 10,
    y: 20,
    color: "blue",
    eggs: [11, 12, 13, 14],

    fly: function () {
        console.log("bird is flying ", this.x, this.y);
    },
}; // this is a bird object

bird.eggs.forEach(function (bird, idx) {
    console.log(bird, idx);
});

// new ways of creating objects  - using function

function Fruit(taste, color) {
    this.color = color;
    this.taste = taste;
}
// with new key word

let orange = new Fruit("sweet", "orange");

// json object
var apple = {
    taste: "sweet",
    color: "red",
};

// new way using the class key word  - introduced in  eECMAscript 2015

// classes are special functions
// class declaration   (not hoisted )
class FruitClass {
    constructor(taste, color) {
        this.color = color;
        this.taste = taste;
    }
}

//class expression - antohter way of defining th eclass
// taking a variable and trying ti map it to a class name

// (not hoisted )
let FruitClass2 = class {
    constructor(taste, color) {
        this.color = color;
        this.taste = taste;
    }
};
let kiwi = new FruitClass("sweet", "green ");

let banana = new FruitClass2("sweet", "baaannaaannaa ");
