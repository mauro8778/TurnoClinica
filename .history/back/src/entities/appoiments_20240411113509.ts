import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";


@Entity()
export class appoiments{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: number

    @Column()
    description: string;

    @Column()
    status: 'active' | 'cancelled'
    
    @ManyToOne(()=>user,(user)=>user.appoiments)
    user:user

}