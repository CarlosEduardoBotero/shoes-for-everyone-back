import { nanoid } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ length: 16 }) id: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @BeforeInsert()
  private async setId() {
    this.id = `usr_${nanoid(12)}`;
  }
}
