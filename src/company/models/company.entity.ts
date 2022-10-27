import { LocalEntity } from "src/local/models/local.entity";
import { ResponsibleEntity } from "src/responsible/models/responsible.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "company "})
export class CompanyEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    description: string;


    @CreateDateColumn({ name: "created_at"})
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

    @UpdateDateColumn({ name: "updated_at"})
    updatedAt: string;

    @OneToMany((type) => ResponsibleEntity, (responsible) =>  responsible)
    responsible: ResponsibleEntity[];

    @OneToMany((type) => LocalEntity, (local) =>  local)
    local: LocalEntity[];

}