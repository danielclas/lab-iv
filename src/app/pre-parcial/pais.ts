export class Pais{

    public subregion: String;
    public capital: String;
    public currency: String;
    public flag: String;
    public language: String;
    public population: String;
    public name: String;

    constructor(obj: any){
        this.subregion = obj.subregion;
        this.capital = obj.capital;
        this.flag = obj.flag;
        this.population = obj.population;
        this.name = obj.name;
    }

}