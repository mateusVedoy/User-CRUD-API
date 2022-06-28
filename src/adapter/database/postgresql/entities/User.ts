import { Entity, Column } from "typeorm";

@Entity("usuario")
export class User {

    @Column("usr_nomeCompleto")
    userFullName: String;
}