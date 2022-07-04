import { Entity, Column, ObjectIdColumn, ManyToMany, JoinTable, ObjectID} from "typeorm";

import { Address } from "./address";
import { Card } from "./card";
import { Order } from "./order";

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectID;

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
