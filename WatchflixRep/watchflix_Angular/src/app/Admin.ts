export type LocalAdmin = {
    //ADD MORE!!!!!
    adminName: string;
    adminUsername: string;
    adminPassword: string;
    adminEmail: string;
    
  }

export class Admin{
    constructor(
        public adminId: string,
        public adminName: string,
        public adminUsername: string,
        public adminPassword: string,
        public adminEmail: string,
    ){}
}
