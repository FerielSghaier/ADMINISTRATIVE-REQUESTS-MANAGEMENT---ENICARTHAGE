export class DemandeBus {
    constructor(
        public id?: number,
        public destination?: String,
        public dateDep?: Date,
        public dateArr?: Date,
        public heureDep?: Date,
        public heureArr?: Date,
        public raison?: String,
        public acceptee?: boolean,
        
    ){}
}