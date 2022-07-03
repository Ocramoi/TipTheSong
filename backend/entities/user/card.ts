import { Entity, Column, ObjectIdColumn} from "typeorm";

@Entity()
export class Card {
    @ObjectIdColumn()
    id: number;

    @Column()
    cardNumber: string;

    @Column()
    dueDate: string;

    @Column()
    ownerName: string;

    @Column()
    securityCode: string;
}
