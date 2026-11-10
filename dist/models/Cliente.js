export class Cliente {
    id;
    nome;
    CPF;
    RG;
    anoNascimento;
    constructor(id, nome, CPF, RG, anoNascimento) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.RG = RG;
        this.anoNascimento = anoNascimento;
    }
    getCPF() {
        return console.log(this.CPF);
    }
    getNome() {
        return console.log(this.nome);
    }
    getRG() {
        return console.log(this.RG);
    }
    getAnoNascimento() {
        return console.log(this.anoNascimento);
    }
    getIdade() {
        const anoAtual = new Date().getFullYear();
        let idade = anoAtual - this.anoNascimento.getFullYear();
        return console.log(idade);
    }
}
