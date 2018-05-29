


// Ukoliko koristimo Objekte tj Klase umesto interfejsa ya tipove nema puno smisla bez konstruktora

export default class Brand {

  id:number;
  name:string;

  constructor(name:string, id?:number){
    id?this.id=id:null;
    this.name=name;
  }

}
