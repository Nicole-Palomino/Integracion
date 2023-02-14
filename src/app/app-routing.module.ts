import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './componentes/area/area.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';

const routes: Routes = [
  {path:'areas', component:AreaComponent},
  {path:'empleados', component:EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
