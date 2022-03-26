/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios

        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autories
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [

    //uma categoria
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lecher'
            },
        ],
    },

    //outra categoria
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)
//2

for(let categoryBook of booksByCategory ) {
    console.log('Total de livros da categorias ', categoryBook.category)
}


