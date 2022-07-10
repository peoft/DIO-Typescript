function soma(a:number, b:number) {
    return a + b;
}

// types - estrutura de dados
// interfaces - contratos para implementar as classes

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(decibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (decibeis) => (`${decibeis}dB`),
}

const felino: IFelino = {
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (decibeis) => (`${decibeis}dB`),
}