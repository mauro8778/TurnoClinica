import iAppoiment from "../interface/iAppoiment"
const appoiment:iAppoiment[]=[];

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