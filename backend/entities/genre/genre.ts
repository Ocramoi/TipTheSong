import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Genre {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;
}
