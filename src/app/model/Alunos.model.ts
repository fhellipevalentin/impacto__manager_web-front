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
    responsavel01: string | null;
    telefoneResponsavel01: string | null;
    responsavel02: string | null;
    telefoneResponsavel02: string | null; 

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
        this.responsavel01 = alunos?.responsavel01 || '';
        this.telefoneResponsavel01 = alunos?.telefoneResponsavel01 || '';
        this.responsavel02 = alunos?.responsavel02 || '';
        this.telefoneResponsavel02 = alunos?.telefoneResponsavel02 || '';


        this.turmas = alunos?.turmas || [];
    }
}