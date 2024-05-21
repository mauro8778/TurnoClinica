interface turnos {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: 'active' | 'cancelled';
}