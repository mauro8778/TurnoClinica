interface turnos {
    id: number;
    date: string;
    time: number;
    userId: number;
    status: 'active' | 'cancelled';
}