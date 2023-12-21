export class DemandeMateriel {
    constructor(
        public id?: number,
        public materiel?: String,
        public date?: Date,
        public temps?: Date,
        public duree?: number,
        public quantite?: number,
        public raison?: String,
        public etat?: boolean,
        
    ){}
}