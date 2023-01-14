import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'bigint',
    width: 20
  })
  onebot_id?: number;
  
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
    length: 64
  })
  nickname?: string;

  @Column({
    length: 64
  })
  group_nickname?: string;

  @Column({
    type: 'bigint',
    width: 20
  })
  group_id?: number;

  @Column({
    length: 1024
  })
  message?: string;

  @Column({
    length: 1024
  })
  raw_messgae?: string;

  @Column({
    type: 'tinyint'
  })
  anonymous?: boolean;

  @Column({
    type: 'tinyint'
  })
  blacklisted?: boolean;
}
