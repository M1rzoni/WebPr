import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ContactComponent } from './components/kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: PocetnaComponent },
  //{ path: 'onama', component: NavComponent },
  //{ path: 'usluge', component: NavComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
