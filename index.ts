// Generic Types

// function adicionaApendiceALista<T>(array: T[], value:T){
//     return array.map(() => value);
// }

// adicionaApendiceALista(['a', 'b', 'c'], 'd');

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a área de administração.

    }

    // redirecionar para a área do usuário.
}