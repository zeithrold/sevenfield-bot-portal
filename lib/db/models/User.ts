import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 36,
  })
  uuid?: string;

  @Column({
    length: 36,
  })
  openid?: string;

  @Column({
    type: "bigint",
    width: 20,
  })
  qq_id?: number;

  @Column({
    length: 36,
  })
  user_group_uuid?: string;
}
