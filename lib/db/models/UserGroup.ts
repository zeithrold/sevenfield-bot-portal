import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class UserGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 36,
  })
  uuid?: string;

  @Column({
    length: 32,
  })
  code?: string;

  @Column({
    length: 32,
  })
  name?: string;

  @Column({
    type: "int",
  })
  allowedJudgeCounts?: number;
}
