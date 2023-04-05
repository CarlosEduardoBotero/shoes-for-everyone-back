import { nanoid } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'examples', schema: 'example' })
export class ExampleEntity {
  @PrimaryColumn({ length: 16 })
  id: string;

  @Column({ length: 32 })
  name: string;

  @Column({
    length: 128,
    nullable: true,
  })
  description: string;

  /*
   * Create and Update Date Columns
   */

  //   @CreateDateColumn({ type: 'timestamp' })
  //   public createdAt!: Date;

  //   @UpdateDateColumn({ type: 'timestamp' })
  //   public updatedAt!: Date;

  @BeforeInsert()
  private async setId() {
    this.id = `exa_${nanoid(12)}`;
  }
}
