import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PalestranteDetalheComponent } from './components/palestrantes/palestrante-detalhe/palestrante-detalhe.component';
import { PalestranteListaComponent } from './components/palestrantes/palestrante-lista/palestrante-lista.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { PerfilDetalheComponent } from './components/user/perfil/perfil-detalhe/perfil-detalhe.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { EventoService } from './services/evento.service';
import { LoteService } from './services/lote.service';
import { AccountService } from './services/account.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AreasComponent } from './components/areas/areas.component';
import { GestaoComponent } from './components/gestao/gestao.component';
import { GestaoInventarioComponent } from './components/gestao/gestao-inventario/gestao-inventario.component';
import { GestaoPessoasComponent } from './components/gestao/gestao-pessoas/gestao-pessoas.component';
import { GestaoProcessoInspecaoComponent } from './components/gestao/gestao-processo-inspecao/gestao-processo-inspecao.component';
import { GestaoProcessoInspecaoCabineComponent } from './components/gestao/gestao-processo-inspecao/components/gestao-processo-inspecao-cabine/gestao-processo-inspecao-cabine.component';
import { GestaoProcessoInspecaoDtoComponent } from './components/gestao/gestao-processo-inspecao/components/gestao-processo-inspecao-dto/gestao-processo-inspecao-dto.component';
import { GestaoProdutosComponent } from './components/gestao/gestao-produtos/gestao-produtos.component';
import { GestaoEsmaltacaoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao.component';
import { GestaoEsmaltacaoInventarioComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-inventario/gestao-esmaltacao-inventario.component';
import { GestaoEsmaltacaoPessoasComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-pessoas/gestao-esmaltacao-pessoas.component';
import { GestaoEsmaltacaoProcessoInspecaoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/gestao-esmaltacao-processo-inspecao.component';
import { GestaoEsmaltacaoProcessoInspecaoCabineComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/components/gestao-esmaltacao-processo-inspecao-cabine/gestao-esmaltacao-processo-inspecao-cabine.component';
import { GestaoEsmaltacaoProcessoInspecaoDtoComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-processo-inspecao/components/gestao-esmaltacao-processo-inspecao-dto/gestao-esmaltacao-processo-inspecao-dto.component';
import { GestaoEsmaltacaoProdutosComponent } from './components/gestao-esmaltacao/gestao-esmaltacao-produtos/gestao-esmaltacao-produtos.component';
import { GestaoFornoComponent } from './components/gestao-forno/gestao-forno.component';
import { GestaoFornoInventarioComponent } from './components/gestao-forno/gestao-forno-inventario/gestao-forno-inventario.component';
import { GestaoFornoProcessoDtoComponent } from './components/gestao-forno/gestao-forno-processo/components/gestao-forno-processo-dto/gestao-forno-processo-dto.component';
import { GestaoRequeimaComponent } from './components/gestao-requeima/gestao-requeima.component';
import { GestaoRequeimaInventarioComponent } from './components/gestao-requeima/gestao-requeima-inventario/gestao-requeima-inventario.component';
import { GestaoRequeimaPessoasComponent } from './components/gestao-requeima/gestao-requeima-pessoas/gestao-requeima-pessoas.component';
import { GestaoRequeimaProcessoComponent } from './components/gestao-requeima/gestao-requeima-processo/gestao-requeima-processo.component';
import { GestaoRequeimaProcessoDtoComponent } from './components/gestao-requeima/gestao-requeima-processo/components/gestao-requeima-processo-dto/gestao-requeima-processo-dto.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { GestaoFornoPessoasComponent } from './components/gestao-forno/gestao-forno-pessoas/gestao-forno-pessoas.component';
import { GestaoFornoProcessoCabineComponent } from './components/gestao-forno/gestao-forno-processo/components/gestao-forno-processo-cabine/gestao-forno-processo-cabine.component';
import { GestaoFornoProcessoComponent } from './components/gestao-forno/gestao-forno-processo/gestao-forno-processo.component';
import { GestaoRequeimaProcessoCabineComponent } from './components/gestao-requeima/gestao-requeima-processo/components/gestao-requeima-processo-cabine/gestao-requeima-processo-cabine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    PalestrantesComponent,
    PalestranteListaComponent,
    PalestranteDetalheComponent,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    PerfilDetalheComponent,
    RedesSociaisComponent,
    NavComponent,
    TituloComponent,
    DateTimeFormatPipe,
    EventoDetalheComponent,
    EventoListaComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    AreasComponent,
    GestaoComponent,
    GestaoInventarioComponent,
    GestaoPessoasComponent,
    GestaoProcessoInspecaoComponent,
    GestaoProcessoInspecaoCabineComponent,
    GestaoProcessoInspecaoDtoComponent,
    GestaoProdutosComponent,
    GestaoEsmaltacaoComponent,
    GestaoEsmaltacaoInventarioComponent,
    GestaoEsmaltacaoPessoasComponent,
    GestaoEsmaltacaoProcessoInspecaoComponent,
    GestaoEsmaltacaoProcessoInspecaoCabineComponent,
    GestaoEsmaltacaoProcessoInspecaoDtoComponent,
    GestaoEsmaltacaoProdutosComponent,
    GestaoFornoComponent,
    GestaoFornoInventarioComponent,
    GestaoFornoPessoasComponent,
    GestaoFornoProcessoComponent,
    GestaoFornoProcessoCabineComponent,
    GestaoFornoProcessoDtoComponent,
    GestaoRequeimaComponent,
    GestaoRequeimaInventarioComponent,
    GestaoRequeimaPessoasComponent,
    GestaoRequeimaProcessoComponent,
    GestaoRequeimaProcessoCabineComponent,
    GestaoRequeimaProcessoDtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgxSpinnerModule,
    NgxCurrencyModule,
  ],
  providers: [
    AccountService,
    EventoService,
    LoteService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
