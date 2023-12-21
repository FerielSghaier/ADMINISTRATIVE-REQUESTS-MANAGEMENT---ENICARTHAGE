export class Organisation {
    constructor(
        public id?: number,
        public nom?: String,
        public type?: String,
        public logo?: String,
        public description?: String,
        public tel?: number,
        public email?: String,
        public mdp?: String,
        public nomResp?: String,
        public prenomResp?: String,
        public etat?: Boolean
        

    ){}
}