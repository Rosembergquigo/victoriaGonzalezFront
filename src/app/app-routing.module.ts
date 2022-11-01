import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';

const routes: Routes = [
  {path: '', component: IngresoComponent},
  {path: 'dash', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
