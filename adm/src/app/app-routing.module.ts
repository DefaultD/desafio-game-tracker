import { EditarOfertaComponent } from './pages/editar-oferta/editar-oferta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroOfertasComponent } from './pages/cadastro-ofertas/cadastro-ofertas.component';
import { NossasOfertasComponent } from './pages/nossas-ofertas/nossas-ofertas.component';

const routes: Routes = [
  { path: 'cadastroofertas', component: CadastroOfertasComponent },
  { path: 'nossasofertas', component: NossasOfertasComponent },
  { path: 'editarOferta/:id', component: EditarOfertaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
