 
export type LocalUser = {
  //ADD MORE!!!!!
  
  email: string;
  username: string;
  name: string;
  mobile: string;
}
 


export class UserService {
 
  constructor() {}
  
  get getHero(){
     return {
      "username": localStorage.getItem("username")
     }
  }

  setHero(hero: LocalUser){
    localStorage.setItem("username", `${hero.username}`)
  }
} 