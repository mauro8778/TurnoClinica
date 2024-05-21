interface appoimentDtos {
   
    date: string;
    time: number;
    status: 'active' | 'cancelled';
    description: string;
}

export default appoimentDtos;