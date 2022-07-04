import { Entity, Column, ObjectIdColumn, ManyToMany, JoinTable } from "typeorm";
import { Genre } from "../genre/genre";

@Entity()
export class Artist {
    @ObjectIdColumn()
    _id: number;

    @Column()
    name: string;

    @Column()
    bio: string;

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];
}
