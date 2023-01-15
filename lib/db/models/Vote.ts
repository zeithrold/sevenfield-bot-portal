import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class Vote extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 36,
  })
  uuid?: string;

  @Column({
    length: 36
  })
  tag_uuid?: string;

  @Column({
    type: 'bigint',
    width: 20
  })
  time?: number;
}
