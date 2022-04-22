import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Product } from './product';
import { Genre } from "../genre/genre";
import { Artist } from "../artist/artist";
import { Song } from "./song";

@Entity()
export class Album extends Product {
    @ManyToMany(type => Artist)
    @JoinTable()
    artists: Artist[];

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];

    @Column({ type: "date" })
    released: string;

    @ManyToMany(type => Song)
    @JoinTable()
    songs: Song[];
}
