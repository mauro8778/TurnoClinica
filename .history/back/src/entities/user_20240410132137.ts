import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({

    name:"users"
})
export class user{
    
    @PrimaryColumn()
    id: number

    @Column()
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
