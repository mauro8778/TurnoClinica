interface turnDtos {
    id: number;
    date: string;
    time: number;
    userId: number;
    status: 'active' | 'cancelled';
}

export default turnDtos;