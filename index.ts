// Generic Types

// function adicionaApendiceALista<T>(array: T[], value:T){
//     return array.map(() => value);
// }

// adicionaApendiceALista(['a', 'b', 'c'], 'd');

interface IUsuario {
    id: string;
    email: string;
    // item opcional
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario' ;
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    //redirecionar para a área do usuário.
}