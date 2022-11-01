import { CompanyEntity } from "src/company/models/company.entity";
import { LocalEntity } from "src/local/models/local.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "responsible "})
export class ResponsibleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    address: string;

    @CreateDateColumn({ name: "created_at"})
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

    @UpdateDateColumn({ name: "updated_at"})
    updatedAt: string;


    @ManyToOne(() => CompanyEntity, (company) => company.id, { cascade: true, onDelete: "CASCADE" })
    company ?: CompanyEntity;

    @ManyToOne(() => LocalEntity, (local) => local.id, { cascade: true, onDelete: "CASCADE" })
    local ?: LocalEntity;


}