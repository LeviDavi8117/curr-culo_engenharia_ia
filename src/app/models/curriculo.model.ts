export interface Perfil {
    nome: string;
    titulo: string;
    subtitulo: string;
    bio: string;
    localizacao: string;
    status: string;
    email: string;
    linkedin: string;
    github?: string;
}

export type CategoriaSkill = 'todas' | 'frontend' | 'ia_dados' | 'fundamentos' | 'ferramentas';

export interface Habilidade {
    nome: string;
    categoria: 'frontend' | 'ia_dados' | 'fundamentos' | 'ferramentas';
    nivel: number; // 0 a 100% (para a barra de progresso)
    icone: string;
    descricao: string;
}

export interface Projeto {
    id: string;
    titulo: string;
    descricao: string;
    categoria: 'frontend' | 'ia' | 'academico';
    tecnologias: string[];
    linkDemo?: string;
    linkGithub?: string;
    destaque: boolean;
}

export interface Formacao {
    instituicao: string;
    curso: string;
    periodo: string;
    status: string;
    detalhes: string;
}
