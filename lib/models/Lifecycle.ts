import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class Lifecycle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'bigint',
    width: 20
  })
  time?: number;
  
  @Column({
    length: 16
  })
  type?: string;
}
