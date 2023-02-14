import { Component } from '@angular/core';
import EmpresaService from 'src/app/servicios/ControlEmpesa.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados:Array<any>=[];

  constructor(private empService:EmpresaService){
    this.empService.listado_empleados().subscribe((response:any)=>{
      this.empleados = response;
    })
  }
}
