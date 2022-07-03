import { Entity, Column, ObjectIdColumn} from "typeorm";

@Entity()
export class Order {
    @ObjectIdColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    status: string;

    @Column()
    total: number;
}
