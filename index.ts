function soma(a:number, b:number) {
    return a + b;
}

// types - estrutura de dados - usar em junções (&) ou merges (|)
// interfaces - contratos para implementar as classes

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;
//type IDomestico = IFelino & ICanino;

const animal: IDomestico = {
   domestico: true,
   nome: 'cachorro',
   porte: 'medio',
   tipo: 'terrestre',
}

const felino: IFelino = {
    nome: 'Leao',
    tipo: 'terrestre',
    domestico: true,
    visaoNoturna: true,
}

