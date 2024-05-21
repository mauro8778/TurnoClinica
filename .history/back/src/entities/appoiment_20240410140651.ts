import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class appoiment{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: number

    @Column()
    userId: number

    @Column()
    status: 'active' | 'cancelled'

}