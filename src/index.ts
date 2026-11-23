export const analisarValor = (valor: string | number | boolean) => {

    return typeof valor
}

export const calcularMedia = (notas: number[]): number => {
    const media = notas.reduce((acc: number, element: number) => {
        acc += element / notas.length

        return acc
    }, 0)


    return media
}

export interface Usuario {
    id: number,
    nome: string,
}


export const buscarUsuario = (usuarios: Usuario[], id: number): null | Usuario => {

    const usuario = usuarios.find((element) => element.id === id);

    if (!usuario) {
        return null
    }

    return usuario
}
// export const contarUsuariosAtivos = (usuarios: Usuario[]): number => {
//     return usuarios.filter((element) => element.ativo === true).length
// }


export const processarValor = (valor: unknown): string | number | boolean => {
    if (typeof valor === 'string') {
        return valor.toLocaleUpperCase()
    }

    if (typeof valor === 'number') {
        return valor * 2
    }

    if (typeof valor === 'boolean') {
        return !valor
    }

    return "Tipo não suportado"
}

export const registrarUsuario = (nome: string): void => {
    console.log(`Usuário ${nome} registrado com sucesso!`)
}

export const falharOperacao = (mensagem: string): never => {
    throw new Error(mensagem);
}