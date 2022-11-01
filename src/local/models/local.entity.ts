import { CompanyEntity } from "src/company/models/company.entity";
import { ResponsibleEntity } from "src/responsible/models/responsible.entity";
import { TicketEntity } from "src/ticket/models/ticket.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'local'})
export class LocalEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    name: string;

    @Column()
    address: string;
  
    @CreateDateColumn({ name: "created_at"})
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

    @UpdateDateColumn({ name: "updated_at"})
    updatedAt: string;

    @ManyToOne(() => CompanyEntity, (company) => company.id, { cascade: true, onDelete: "CASCADE" } )
    company: CompanyEntity;

    @OneToMany((type) => ResponsibleEntity, (responsible) =>  responsible, { cascade: true, onDelete: "CASCADE" })
    responsible: ResponsibleEntity[];

    @OneToMany((type) => TicketEntity, (ticket) =>  ticket, { cascade: true, onDelete: "CASCADE"})
    ticket: TicketEntity[];


}