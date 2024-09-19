export class Alunos {

    id: number | null;
    nome: string | null;
    cpf: string | null;
    sexo: string | null;
    dataNascimento: string | null;
    telefone: string | null;
    constructor (alunos: Partial<Alunos> = {}) {
        this.id = alunos?.id || null;
        this.nome = alunos?.nome || '';
        this.cpf = alunos?.cpf || '';
        this.sexo = alunos?.sexo || '';
        this.dataNascimento = alunos?.dataNascimento || '';
        this.telefone = alunos?.telefone || '';
    }
}