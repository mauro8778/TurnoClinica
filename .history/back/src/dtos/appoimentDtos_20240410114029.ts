interface appoimentDtos {
   
    date: string;
    time: number;
    userId: number;
    status: 'active' | 'cancelled';
}

export default appoimentDtos;