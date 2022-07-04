import { Entity, Column, ObjectIdColumn, ObjectID} from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Card {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    cardNumber: string;

    @Column()
    dueDate: string;

    @Column()
    ownerName: string;

    @Column()
    securityCode: string;
}
