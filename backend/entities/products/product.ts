import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @ObjectIdColumn()
    _id: ObjectId;

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    launchDate: number;

    @Column()
    frontCover: string;

    @Column()
    artists: string[];

    @Column()
    genres: string[];

    @Column()
    shortDescription: string;

    @Column()
    longDescription: string;

    @Column()
    extraInfo: string;

    @Column()
    price: number;

    @Column()
    amountInStock: number;
};