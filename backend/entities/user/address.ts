import { Entity, Column, ObjectIdColumn, ObjectID} from "typeorm";

@Entity()
export class Address {
    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    country: string;

    @Column()
    postalCode: string;

    @Column()
    address: string;

    @Column()
    complement: string;
    
    @Column()
    state: string;

    @Column()
    city: string;
}
