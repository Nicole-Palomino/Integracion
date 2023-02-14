import { Component } from '@angular/core';
import Area from 'src/app/clases/area';
import Swal from 'sweetalert2'

import EmpresaService from 'src/app/servicios/ControlEmpesa.service'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  public areas:Area[]=[];

  cod:String="";
  nombre_area:String="";
  busqueda:String="";

  constructor(private areaService:EmpresaService){
    this.mostrar_area();
  }

  modalRegistrar(){
    Swal.fire({
      title: 'Agregado',
      text: 'Registro añadido satisfactoriamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  modalModificar(){
    Swal.fire({
      title: 'Modificado',
      text: 'Registro modificado satisfactoriamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  modalEliminar(){
    Swal.fire({
      title: 'Eliminado',
      text: 'Registro eliminado satisfactoriamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  errorModal(){
    Swal.fire({
      title: 'Error!',
      text: 'Verifique datos',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  seleccionar(area:Area){
    this.cod = area.cod;
    this.nombre_area = area.nombre_area;
  }

  nuevo(){
    this.cod="";
    this.nombre_area="";
  }

  mostrar_area(){
    this.areaService.listado_areas().subscribe((response:any)=>{
      this.areas=response;
    })
  }

  agregar_area(){
    if (this.cod=='' || this.nombre_area=='') {
      this.errorModal()
    } else {
      let a  = new Area(this.cod, this.nombre_area);
      this.areaService.registrar_areas(a).subscribe((response)=>{
        console.log(response);
        this.nuevo();
        this.mostrar_area();
        this.modalRegistrar()
      })
    }
  }

  modificar_area(){
    if (this.cod=='' || this.nombre_area=='') {
      this.errorModal()
    } else {
        let a = new Area(this.cod, this.nombre_area);
        this.areaService.modificar_areas(a).subscribe((response)=> {
        this.nuevo();
        this.mostrar_area();
        this.modalModificar()
      });
      this.nuevo();
    }
  }

  eliminar_area(){
    if (this.cod=='') {
      this.errorModal()
    } else {
      this.areaService.eliminar_areas(this.cod).subscribe((response)=> {
        console.log(response)
        this.nuevo();
        this.mostrar_area();
        this.modalEliminar()
      });
    }
  }
}  
