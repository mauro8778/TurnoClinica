import { Entity } from "typeorm"

@Entity()
export class users{
    id: number
    name: string
    email: string
    birthdate: string
    nDni: string
    credentialsId: number

}
