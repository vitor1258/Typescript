/* eslint-disable */
function semRetorno(...args: string[]): void {
console.log(args.join(''));
}

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Mariano',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
semRetorno('Vitor', 'Mariano');
pessoa.exibirNome();

export { pessoa };
