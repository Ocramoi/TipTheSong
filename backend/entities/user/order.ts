import { Entity, Column, ObjectIdColumn, ObjectID} from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Order {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    date: string;

    @Column()
    status: string;

    @Column()
    total: number;
}
