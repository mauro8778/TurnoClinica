interface appoimentDtos {
   
    date: string;
    time: number;
    status: 'active' | 'cancelled';
    description: string,
    userId:string

}

export default appoimentDtos;