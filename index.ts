interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito ?: string;
}

type CachorroSomenteLeitura = {
    // -? - remove os itens opcionais
    readonly [K in keyof ICachorro]-?: ICachorro[K];
}


class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao);
