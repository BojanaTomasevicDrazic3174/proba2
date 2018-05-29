

import Brand from '../model/brand';

export default class Mobilni {

    id: number;
    name: string;
    cena: number;
    opis: string;

    brand: Brand;

    constructor (bla:string, cena:number, opis:string, brandid:number, brandname:string, id?:number){
      
      id? this.id=id:null;
      this.name=bla;
      this.cena=cena;
      this.opis=opis;

      this.brand=new Brand(brandname, brandid);
   
    }

    changeName(){
      this.name='Milos';
    }
  
  // tslint:disable-next-line:eofline
  }

