interface appoimentDtos {
   
    date: string;
    time: number;
    status: 'active' | 'cancelled';
    description: string;
    userid:number
}

export default appoimentDtos;