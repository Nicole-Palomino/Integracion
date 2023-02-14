import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import Empleado from "../clases/empleado";
import Area from "../clases/area";

@Injectable({
    providedIn:'root'
})
class EmpresaService {
    api:String = "http://localhost:9949/";

    constructor(private http:HttpClient){

    }

    listado_empleados(){
        const url = this.api + "empleados";
        return this.http.get(url);
    }

    

    registrar_empleado(e:Empleado){
        const url = this.api + "nuevo_empleado";
        return this.http.post<Empleado>(url,e);
    }

    modificar_empleado(e:Empleado){
        const url = this.api + "editar_empleado";
        return this.http.put<Empleado>(url,e);
    }

    eliminar_empleado(dni:String){
        const url = this.api + "eliminar_empleado";
        return this.http.delete(`${url}/${dni}`);
    }

    listado_areas(){
        const url = this.api + "areas";
        return this.http.get(url);
    }

    registrar_areas(a:Area){
        const url = this.api + "nueva_area";
        return this.http.post<Area>(url, a);
    }

    modificar_areas(a:Area){
        const url = this.api + "editar_area";
        return this.http.put<Area>(url, a);
    }

    eliminar_areas(cod:String){
        const url = this.api + "eliminar_area";
        return this.http.delete(`${url}/${cod}`);
    }
}

export default EmpresaService;