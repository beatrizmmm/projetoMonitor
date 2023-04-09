import { GestaoRequeimaProcessoDtoComponent } from './components/gestao-requeima/gestao-requeima-processo/components/gestao-requeima-processo-dto/gestao-requeima-processo-dto.component';
import { GestaoRequeimaProcessoCabineComponent } from './components/gestao-requeima/gestao-requeima-processo/components/gestao-requeima-processo-cabine/gestao-requeima-processo-cabine.component';
import { GestaoRequeimaProcessoComponent } from './components/gestao-requeima/gestao-requeima-processo/gestao-requeima-processo.component';
import { GestaoRequeimaPessoasComponent } from './components/gestao-requeima/gestao-requeima-pessoas/gestao-requeima-pessoas.component';
import { GestaoRequeimaComponent } from './components/gestao-requeima/gestao-requeima.component';
import { GestaoFornoProcessoCabineComponent } from './components/gestao-forno/gestao-forno-processo/components/gestao-forno-processo-cabine/gestao-forno-processo-cabine.component';
import { GestaoFornoProcessoComponent } from './components/gestao-forno/gestao-forno-processo/gestao-forno-processo.component';
import { GestaoFornoPessoasComponent } from './components/gestao-forno/gestao-forno-pessoas/gestao-forno-pessoas.component';
import { GestaoFornoInventarioComponent } from './components/gestao-forno/gestao-forno-inventario/gestao-forno-inventario.component';
import { GestaoFornoComponent } from './components/gestao-forno/gestao-forno.component';
import { GestaoEsmaltacaoProcessoInspecaoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/gestao-esmaltacao-processo-inspecao.component';
import { GestaoEsmaltacaoPessoasComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-pessoas/gestao-esmaltacao-pessoas.component';
import { GestaoEsmaltacaoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao.component';
import { GestaoProdutosComponent } from './components/gestao/gestao-produtos/gestao-produtos.component';
import { GestaoProcessoInspecaoDtoComponent } from './components/gestao/gestao-processo-inspecao/components/gestao-processo-inspecao-dto/gestao-processo-inspecao-dto.component';
import { GestaoProcessoInspecaoCabineComponent } from './components/gestao/gestao-processo-inspecao/components/gestao-processo-inspecao-cabine/gestao-processo-inspecao-cabine.component';
import { GestaoProcessoInspecaoComponent } from './components/gestao/gestao-processo-inspecao/gestao-processo-inspecao.component';
import { GestaoPessoasComponent } from './components/gestao/gestao-pessoas/gestao-pessoas.component';
import { GestaoInventarioComponent } from './components/gestao/gestao-inventario/gestao-inventario.component';
import { GestaoComponent } from './components/gestao/gestao.component';
import { AreasComponent } from './components/areas/areas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { ContatosComponent } from './components/contatos/contatos.component';

import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { GestaoEsmaltacaoInventarioComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-inventario/gestao-esmaltacao-inventario.component';
import { GestaoEsmaltacaoProcessoInspecaoCabineComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/components/gestao-esmaltacao-processo-inspecao-cabine/gestao-esmaltacao-processo-inspecao-cabine.component';
import { GestaoEsmaltacaoProcessoInspecaoDtoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/components/gestao-esmaltacao-processo-inspecao-dto/gestao-esmaltacao-processo-inspecao-dto.component';
import { GestaoEsmaltacaoProdutosComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-produtos/gestao-esmaltacao-produtos.component';
import { GestaoFornoProcessoDtoComponent } from './components/gestao-forno/gestao-forno-processo/components/gestao-forno-processo-dto/gestao-forno-processo-dto.component';
import { GestaoRequeimaInventarioComponent } from './components/gestao-requeima/gestao-requeima-inventario/gestao-requeima-inventario.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'user', redirectTo: 'user/perfil' },
      {
        path: 'user/perfil',
        component: PerfilComponent,
      },
      { path: 'eventos', redirectTo: 'eventos/lista' },
      {
        path: 'eventos',
        component: EventosComponent,
        children: [
          { path: 'detalhe/:id', component: EventoDetalheComponent },
          { path: 'detalhe', component: EventoDetalheComponent },
          { path: 'lista', component: EventoListaComponent },
        ],
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'palestrantes', component: PalestrantesComponent },
      { path: 'contatos', component: ContatosComponent },

    ],
  },
  {
    path: 'areas', component: AreasComponent
  },
  {
    path: 'gestao-inspecao', component: GestaoComponent,
  },
  {
    path: 'gestao-inventario', component: GestaoInventarioComponent
  },
  {
    path: 'gestao-pessoas', component: GestaoPessoasComponent
  },
  {
    path: 'gestao-processo-inspecao', component: GestaoProcessoInspecaoComponent
  },
  {
    path: 'gestao-processo-inspecao-cabine', component: GestaoProcessoInspecaoCabineComponent
  },
  {
    path: 'gestao-processo-inspecao-dto', component: GestaoProcessoInspecaoDtoComponent
  },
  {
    path: 'gestao-produtos', component: GestaoProdutosComponent
  },
  {
    path: 'gestao-esmaltacao', component: GestaoEsmaltacaoComponent,
  },
  {
    path: 'gestao-esmaltacao-inventario', component: GestaoEsmaltacaoInventarioComponent,
  },
  {
    path: 'gestao-esmaltacao-pessoas', component: GestaoEsmaltacaoPessoasComponent,
  },
  {
    path: 'gestao-esmaltacao-processo-inspecao', component: GestaoEsmaltacaoProcessoInspecaoComponent,
  },
  {
    path: 'gestao-esmaltacao-processo-inspecao-cabine', component: GestaoEsmaltacaoProcessoInspecaoCabineComponent,
  },
  {
    path: 'gestao-esmaltacao-processo-inspecao-dto', component: GestaoEsmaltacaoProcessoInspecaoDtoComponent,
  },
  {
    path: 'gestao-esmaltacao-produtos', component: GestaoEsmaltacaoProdutosComponent,
  },
  {
    path: 'gestao-forno', component: GestaoFornoComponent,
  },
  {
    path: 'gestao-forno-inventario', component: GestaoFornoInventarioComponent,
  },
  {
    path: 'gestao-forno-pessoas', component: GestaoFornoPessoasComponent,
  },
  {
    path: 'gestao-forno-processo', component: GestaoFornoProcessoComponent,
  },
  {
    path: 'gestao-forno-processo-cabine', component: GestaoFornoProcessoCabineComponent,
  },
  {
    path: 'gestao-forno-processo-dto', component: GestaoFornoProcessoDtoComponent,
  },
  {
    path: 'gestao-requeima', component: GestaoRequeimaComponent,
  },
  {
    path: 'gestao-requeima-inventario', component: GestaoRequeimaInventarioComponent,
  },
  {
    path: 'gestao-requeima-pessoas', component: GestaoRequeimaPessoasComponent,
  },
  {
    path: 'gestao-requeima-processo', component: GestaoRequeimaProcessoComponent,
  },
  {
    path: 'gestao-requeima-processo-cabine', component: GestaoRequeimaProcessoCabineComponent,
  },
  {
    path: 'gestao-requeima-processo-dto', component: GestaoRequeimaProcessoDtoComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
