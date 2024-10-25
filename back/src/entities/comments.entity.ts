import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Comments {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    comment!: string;
}
