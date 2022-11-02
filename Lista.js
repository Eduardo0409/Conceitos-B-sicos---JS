const names = ['Felipe', 'Joao', 'Julia', 10, false];

const joao = names[1];

names.push('Eduardo')
names.unshift(true)

names.pop();
names.pop();
names.pop();

names[3] = 'Gustavo'

const indexOfFelipe = names.indexOf("Felipe");

const sorteNames = names.sort();

const namesIsArray = Array.isArray(names)



console.log(names.length)
console.log(sorteNames)
console.log(namesIsArray)