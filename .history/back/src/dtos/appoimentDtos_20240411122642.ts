interface appoimentDtos {
   
    date: string;
    time: number;
    status: 'active' | 'cancelled';
    description: string,
    userId:number

}

export default appoimentDtos;