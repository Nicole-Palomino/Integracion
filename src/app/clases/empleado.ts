class Empleado{
    dni:String="";
    cod_area:String="";
    nombres:String="";
    apellidos:String="";
    sexo:String="";
    edad:number=0;
    email:String="";
    salario:number=0.0;

    constructor(dni:String, cod_area:String, nombres:String, apellidos:String, sexo:String, edad:number, email:String, salario:number){
        this.dni = dni;
        this.cod_area = cod_area;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.edad = edad;
        this.email = email;
        this.salario = salario;
    }
}   

export default Empleado;