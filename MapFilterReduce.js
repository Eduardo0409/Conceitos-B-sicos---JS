//MAP

const numbers = [1,2,3,4,5]

const numbersMultip = numbers.map(function(number){
    return number * 2
})

//------------------------------------------------------

//FILTER

const ages = [8, 13, 27, 30, 22, 40]

// const agesfiltro = ages.filter(function(age){
//     return age % 2 === 0
// })

//------------------------------------------------------

//REDUCE

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 0)

console.log(sumOfAges)