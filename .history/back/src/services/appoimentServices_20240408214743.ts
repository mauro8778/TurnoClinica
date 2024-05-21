import iAppoiment from "../interface/iAppoiment"
const appoiment:iAppoiment[]=[];

export const getAppoimentServices=async()=>{
    const allAppoiment:iAppoiment[]= appoiment;
    return allAppoiment;
}