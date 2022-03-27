export type LocalAdmin = {
  //ADD MORE!!!!!
  
  adminEmail: string;
  adminUsername: string;
  adminName: string;
  adminPassword: string;
}
 

export class AdminServiceService {

  constructor() {}
  
  get getHero(){
     return {
      "adminUsername": localStorage.getItem("adminUsername"),
     }
  }
  setHero(hero: LocalAdmin){
    localStorage.setItem("adminUsername", `${hero.adminUsername}`)
  }
} 