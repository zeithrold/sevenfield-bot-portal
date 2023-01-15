import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 36,
  })
  uuid?: string;

  @Column({
    length: 64
  })
  code?: string;

  @Column({
    length: 64
  })
  name?: string;

  @Column({
    length: 256
  })
  description?: string;

  @Column({
    length: 7
  })
  color?: string;

  @Column()
  approved?: boolean;
}
