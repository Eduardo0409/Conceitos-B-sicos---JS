function sum(a,b = 10){
    return a + b
}

const sumValue1 = sum(2)

console.log(sumValue)


const sumArrow = (a , b = 10) =>{
    return a + b
}

//Mesma coisa que o de cima

const sumArrow2 = (a, b = 10) => a + b


const sumValue = sumArrow2(2)

console.log(sumValue)