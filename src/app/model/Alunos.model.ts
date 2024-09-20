import { Turmas } from "./Turma.model";

export class Alunos {

    id: number | null;
    nome: string | null;
    cpf: string | null;
    sexo: string | null;
    dataNascimento: string | null;
    telefone: string | null;
    cep: string | null;
    rua: string | null;
    bairro: string | null;
    cidade: string | null;
    numeroCasa: string | null;
    complemento: string | null;
    responsavel1: string | null;
    telefoneResponsavel1: string | null;
    responsavel2: string | null;
    telefoneResponsavel2: string | null; 

    turmas: Turmas[];

    constructor (alunos: Partial<Alunos> = {}) {
        this.id = alunos?.id || null;
        this.nome = alunos?.nome || '';
        this.cpf = alunos?.cpf || '';
        this.sexo = alunos?.sexo || '';
        this.dataNascimento = alunos?.dataNascimento || '';
        this.telefone = alunos?.telefone || '';
        this.cep = alunos?.cep || '';
        this.rua = alunos?.rua || '';
        this.bairro = alunos?.bairro || '';
        this.cidade = alunos?.cidade || '';
        this.numeroCasa = alunos?.numeroCasa || '';
        this.complemento = alunos?.complemento || '';
        this.responsavel1 = alunos?.responsavel1 || '';
        this.telefoneResponsavel1 = alunos?.telefoneResponsavel1 || '';
        this.responsavel2 = alunos?.responsavel2 || '';
        this.telefoneResponsavel2 = alunos?.telefoneResponsavel2 || '';


        this.turmas = alunos?.turmas || [];
    }
}