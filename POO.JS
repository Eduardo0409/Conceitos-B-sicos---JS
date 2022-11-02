// class Person{
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     getFullName(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }

//     static speak() {
//         console.log('Hello world!')
//     }
// }

// const person = new Person('Jane', 'Doe', 40);

// console.log(person)

// Person.speak();


//HERANCAS

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    speak(){
        console.log(`${this.name} barked!`)
    }

}

const dog = new Dog('Bomb');
const animal = new Animal('Simba');

animal.speak();
dog.speak();