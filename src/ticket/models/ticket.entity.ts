import { LocalEntity } from "src/local/models/local.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity( { name: 'ticket' } )
export class TicketEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    createdBy: string;
    
    @Column()
    receivedBy: string;

    @Column()
    status: string;

    @CreateDateColumn({ name: "created_at"})
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

    @UpdateDateColumn({ name: "updated_at"})
    updatedAt: string;

    @ManyToOne(() => LocalEntity, (local) => local.id, { cascade: true, onDelete: "CASCADE"} )
    local: LocalEntity;

    
}