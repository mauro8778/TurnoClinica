import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

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

    @Column()
    credentialsId: number

}
