import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export abstract class Product {
    @ObjectIdColumn()
    id: number;

    @Column()
    imgLink: string;

    @Column()
    price: number;

    @Column()
    name: string;

    @Column()
    description: string;
};
