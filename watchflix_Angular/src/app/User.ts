export class User{
    constructor(
        public username: string,
        public email: string,
        public mobile: string,
        public country: string,
        public gender: string,
        public subscribe: boolean,
        public password: string,
        public is_active: boolean,
        public name: string,
    ){}
} 