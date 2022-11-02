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

const {id, descricao, estaCompleto,} = todos

const ultimadescricao = todos[2].descricao;

console.log(ultimadescricao)


const todosJSON = JSON.stringify(todos);

console.log(todosJSON)