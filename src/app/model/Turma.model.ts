export class Turmas {

    id: number | null;
    nome: string | null;
    dia1: string | null;
    dia2: string | null;
    horario: string | null;

    constructor(turma: Partial<Turmas> = {}) {
        this.id = turma?.id || null;
        this.nome = turma?.nome || '';
        this.dia1 = turma?.dia1 || '';
        this.dia2 = turma?.dia2 || '';
        this.horario = turma?.horario || '';
    }
}