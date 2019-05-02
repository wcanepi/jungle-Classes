//static species counters
let numTiger = 0, numMonkey = 0, numSnake = 0;

//Declare the Super Class of Animal
class Animal{
        constructor(){
        
            this.energy = 0;
        }
        makeSound(){
            console.log('sound');
            this.energy -= 3;
        }
        eatFood(sustenance){
            console.log('eating '+sustenance.name);
            this.energy += 5;
        }
        sleep(){
            console.log('sleep');
            this.energy += 10;
        }
}


//Declare Tiger subclass
class Tiger extends Animal{
    constructor(){
        super();
        numTiger++;
    }
    sleep(){
        console.log('tiger');
        this.energy += 5;
    }
    eatFood(sustenance){
        if(sustenance.name == "grain"){
            console.log('cannot eat grain. sensitive stomach');
        }else{
            console.log('tiger');
            super.eatFood(sustenance);
        }
    }
    howManyTotalTigers(){
        return numTiger;
    }
}



//Declare Monkey subclass
class Monkey extends Animal{
    constructor(){
        super();
        numMonkey++;
    }
    makeSound(){
        console.log('monkey makes a sound');
        this.energy -= 4;
        }
    eatFood(sustenance){
        console.log('monkey eating '+sustenance.name);
        this.energy += 2;
    }
    play(){
        console.log(this.energy>=8?'Oooo Oooo Oooo':"The Monkey is super tired");
        this.energy -= 8;
    }

    howManyTotalMonkeys(){
        return numMonkey;
    }
}



//Declare Snake subclass
class Snake extends Animal{
    constructor(){
        super();
        numSnake++;
    }
    howManyTotalSnakes(){
        return numSnake;
    }
}


//Declare Jungle
class Jungle {
    constructor(animalArray){
        this.animals = animalArray==null?[]:animalArray; 
        this.food = [];
    }
    soundOff(){
        this.animals.forEach(function(animal){
            animal.makeSound();
        });
    }
}


//Declare the Food Class

class Food{
    constructor(name){
       this.name = name;
    }
}

//Meat
class Meat extends Food{
    constructor(){
        super("meat");
    }
}


//Fish
class Fish extends Food{
    constructor(){
        super("fish");
    }
}

//Bugs
class Bugs extends Food{
    constructor(){
        super("bugs");
    }
}

//Grain
class Grain extends Food{
    constructor(){
        super("grain");
    }
}

//Test begin here
let tiger = new Tiger();
let tiger2 = new Tiger();
let tiger3 = new Tiger();
tiger.sleep();
let bugs = new Bugs();
let grain = new Grain();
tiger.eatFood(bugs);
tiger.eatFood(grain);
console.log("Number of Tigers "+numTiger);
console.log(tiger.energy);
let monkey = new Monkey();
console.log(numMonket);
monkey.sleep();
monkey.play();
monkey.play();
monkey.play();
let snake = new Snake();
let jungle = new Jungle([tiger, tiger2, tiger3, monkey, snake]);
jungle.soundOff();