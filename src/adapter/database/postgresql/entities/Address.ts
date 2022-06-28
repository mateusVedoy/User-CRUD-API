import { Entity, Column } from "typeorm";

@Entity("endereco")
export class Address {

    @Column("end_pais")
    country: string;

    @Column("end_estado")
    state: String;

    @Column("end_cidade")
    city: String;

    @Column("end_bairro")
    neighborhood: String

    @Column("end_logradouro")
    street: String

    @Column("end_numerologradouro")
    streetNumber: number
}