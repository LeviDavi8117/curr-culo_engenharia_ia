import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEU_PERFIL, MINHAS_HABILIDADES, MEUS_PROJETOS, MINHA_FORMACAO } from './data/curriculo.data';
import { CategoriaSkill } from './models/curriculo.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    // Dados estáticos importados
    readonly perfil = MEU_PERFIL;
    readonly projetos = MEUS_PROJETOS;
    readonly formacao = MINHA_FORMACAO;

    // 1. Signal para o filtro de categorias
    categoriaSelecionada = signal<CategoriaSkill>('todas');

    // 2. Computed Signal: recalcula as habilidades automaticamente
    habilidadesFiltradas = computed(() => {
        const categoria = this.categoriaSelecionada();
        if (categoria === 'todas') {
            return MINHAS_HABILIDADES;
        }
        return MINHAS_HABILIDADES.filter(skill => skill.categoria === categoria);
    });

    // 3. Signal para o feedback visual de copiar e-mail
    copiado = signal<boolean>(false);

    // Ação: trocar categoria
    selecionarCategoria(categoria: CategoriaSkill): void {
        this.categoriaSelecionada.set(categoria);
    }

    // Ação: copiar e-mail com feedback
    copiarEmail(): void {
        navigator.clipboard.writeText(this.perfil.email).then(() => {
            this.copiado.set(true);
            setTimeout(() => {
                this.copiado.set(false);
            }, 2000);
        });
    }
}
