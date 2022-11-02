const person = {
    firstname: 'Eduardo',
    lastname: 'Alves',
    age: '21',
    hobbies: ['Jogar futebol','Jogar videogame','assistir series'],
    dog: {
        name: 'Simba',
        age: 4
    }
}

//const firstname = person.firstname
//const lastname = person.lastname
//const age = person.age
//const hobbies = person.hobbies

//Mesma coisa que o de cima
const {firstname: primeiroNome,
       lastname,
       age,
       hobbies,
       dog: { name: dogName }, 
    } = person

const read = person.hobbies[2]

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(hobbies);

//person.dog = 'Simba'

console.log(person.dog.name)
console.log(dogName)



