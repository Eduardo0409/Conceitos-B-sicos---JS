const todos = [
    {
        id: 1,
        descricao: 'Estudando programacao',
        estaCompleto: false,
    },
    {
        id: 2,
        descricao: 'Ler',
        estaCompleto: true,
    },
    {
        id: 3,
        descricao: 'Treinar',
        estaCompleto: true,
    },
];

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON)


console.log(todosList)