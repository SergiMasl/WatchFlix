export class User{
    constructor(
        public username: string,
        public email: string,
        public mobile: number,
        public country: string,
        public gender: string,
        public subscribe: boolean,
        public password: string
    ){}
}