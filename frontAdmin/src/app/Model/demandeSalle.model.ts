export class DemandeSalle {
    constructor(
        public id?: number,
        public numSalle?: number,
        public batiment?: String,
        public date?: Date,
        public temps?: Date,
        public duree?: number,
        public raison?: String,
        public etat?: boolean,
        
    ){}
}