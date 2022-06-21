// Une dois tipos para criar um tipo único

type User = {
    name:string;
    age:number;
}

type Char = {
    nickname:string;
    id?:number;
}

type Player = User & Char;

const player: Player = {
    name:'Evandro',
    age:31,
    nickname:'End'
}