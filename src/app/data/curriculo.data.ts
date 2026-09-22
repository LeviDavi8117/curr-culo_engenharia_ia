import { Perfil, Habilidade, Projeto, Formacao } from '../models/curriculo.model';

export const MEU_PERFIL: Perfil = {
    nome: 'Levi Davi',
    titulo: 'Estudante de Análise e Desenvolvimento de Sistemas',
    subtitulo: 'Foco em Front-end Moderno e Inteligência Artificial',
    bio: 'Graduando em ADS no 1º semestre, apaixonado por tecnologia, construção de interfaces modernas e aplicações inteligentes. Desenvolvendo habilidades práticas com Angular 22, TypeScript e conceitos de IA.',
    localizacao: 'Fortaleza - CE',
    status: 'Buscando oportunidades de Estágio / Projetos Acadêmicos',
    email: 'Levidavi25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/levi-davi-707622319/',
    github: 'https://github.com/LeviDavi8117'
};

export const MINHAS_HABILIDADES: Habilidade[] = [
    // Front-end
    { nome: 'Angular 22 & SPA', categoria: 'frontend', nivel: 45, icone: '🅰️', descricao: 'Componentes Standalone, Signals e Reatividade' },
    { nome: 'TypeScript', categoria: 'frontend', nivel: 40, icone: '🔷', descricao: 'Tipagem estática, interfaces e modularização' },
    { nome: 'HTML5 & SCSS', categoria: 'frontend', nivel: 50, icone: '🎨', descricao: 'Layouts modernos, Bento Grid e estilização Dark Mode' },

    // IA & Dados
    { nome: 'Conceitos de IA & Prompts', categoria: 'ia_dados', nivel: 40, icone: '🤖', descricao: 'LLMs, agentes inteligentes e automação' },
    { nome: 'Lógica e Algoritmos', categoria: 'fundamentos', nivel: 50, icone: '🧠', descricao: 'Resolução de problemas e estruturas de dados' },

    // Ferramentas
    { nome: 'Node.js & npm', categoria: 'ferramentas', nivel: 45, icone: '📦', descricao: 'Gerenciamento de pacotes e ecossistema JavaScript' },
    { nome: 'Git & GitHub', categoria: 'ferramentas', nivel: 35, icone: '🐙', descricao: 'Controle de versão e colaboração em código' }
];

export const MEUS_PROJETOS: Projeto[] = [
    {
        id: 'curriculo-angular',
        titulo: 'Currículo Digital Interativo - Bento Grid',
        descricao: 'Portfólio moderno desenvolvido em Angular 22 com arquitetura baseada em Signals, SCSS avançado, modo escuro minimalista e filtros reativos de habilidades.',
        categoria: 'frontend',
        tecnologias: ['Angular 22', 'TypeScript', 'SCSS', 'Signals'],
        destaque: true
    },
    {
        id: 'estudos-ia',
        titulo: 'Laboratório de Engenharia de IA & Agentes',
        descricao: 'Projetos e estudos práticos de integração com modelos de linguagem e automação no desenvolvimento.',
        categoria: 'ia',
        tecnologias: ['IA Generativa', 'Engenharia de Prompt', 'Automação'],
        destaque: false
    }
];

export const MINHA_FORMACAO: Formacao = {
    instituicao: 'Faculdade de Tecnologia',
    curso: 'Análise e Desenvolvimento de Sistemas (ADS)',
    periodo: '1º Semestre (2026)',
    status: 'Em andamento',
    detalhes: 'Foco no desenvolvimento de software, arquitetura web, banco de dados e resolução algorítmica de problemas.'
};
