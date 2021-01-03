export class Satellite {
    name: string;
    orbitType: string;
    type:string;
    operational: boolean;
    launchDate: string;

    constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        /// assign class properties in the constructor
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
     shouldShowWarning(): boolean{
         if (this.type.toUpperCase() == 'Space Debris') {
             console.log(this.type.toUpperCase())
            return true;
        } else {
            return false;
        } 

}


}
