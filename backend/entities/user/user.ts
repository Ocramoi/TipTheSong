import { Entity, Column, ObjectIdColumn, ManyToMany, JoinTable } from "typeorm";

import { Address } from "./address";
import { Card } from "./card";
import { Order } from "./order";

@Entity()
export class User {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @ManyToMany(type => Address, {cascade: true})
    @JoinTable()
    addresses: Address[];

    @ManyToMany(type => Card, {cascade: true})
    @JoinTable()
    cards: Card[];

    @ManyToMany(type => Order, {cascade: true})
    @JoinTable()
    orders: Order[];
}
