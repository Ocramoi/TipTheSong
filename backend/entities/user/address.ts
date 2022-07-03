import { Entity, Column, ObjectIdColumn} from "typeorm";

@Entity()
export class Address {
    @ObjectIdColumn()
    id: number;

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
