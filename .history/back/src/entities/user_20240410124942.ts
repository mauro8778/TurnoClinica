import { Column, Entity } from "typeorm"

@Entity()
export class users{
    
    @Column()
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
