import appoimentDtos from "../dtos/appoimentDtos";
import iAppoiment from "../interface/iAppoiment"
const appoiment:iAppoiment[]=[];
let turnid:number=1;

export const getAppoimentServices=async()=>{
    const allAppoiment:iAppoiment[]= appoiment;
    return allAppoiment;
}
export const getAppoimentServicesID = async ( id : number ) => {

    const foundUsers : iAppoiment | undefined = appoiment.find ( appoiment => appoiment.id === id);
    
    if( !foundUsers )
        {
            throw Error("no se encontro ningun turno con ese usuario")

        }
        return foundUsers;
}

export const createAppoiment = async (params : appoimentDtos )=>{

    const newAppoiment:iAppoiment={

        id:turnid++,
        date:params.date,
        userId:params.userId,
        status:params.status
    }

appoiment.push(newAppoiment);
return newAppoiment


}