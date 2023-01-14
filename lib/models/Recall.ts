import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class Recall extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 36
  })
  uuid?: string;
  
  @Column({
    type: 'bigint',
    width: 20
  })
  time?: number;

  @Column({
    type: 'bigint',
    width: 20
  })
  sender_id?: number;

  @Column({
    type: 'bigint',
    width: 20
  })
  operator_id?: number;

  @Column({
    type: 'bigint',
    width: 20
  })
  group_id?: number;
}
