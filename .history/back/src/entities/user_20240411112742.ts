import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { credential } from "./credential"

@Entity({

    name:"users"
})
export class user{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({

        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: string

    @OneToOne( () => credential )
    @JoinColumn()
    credential: credential
    
    @onetomany()

}
