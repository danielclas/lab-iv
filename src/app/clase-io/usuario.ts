export class Usuario{

    public id: String;
    public Sexo: String;
    public email: String;
    public Nombre: String;
    public Apellido: String;
    public FechaNac: String;
    public FotoPerfil: String;

    constructor(obj: any){
        this.id = obj.id;
        this.Sexo = obj.Sexo;
        this.email = obj.email;
        this.Nombre = obj.Nombre;
        this.Apellido = obj.Fpellido;
        this.FechaNac = obj.FechaNac;
        this.FotoPerfil = obj.FotoPerfil;

        console.log("obj: ", obj);
    }

}