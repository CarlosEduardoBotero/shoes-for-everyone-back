// import { nanoid } from "nanoid";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'examples', schema: 'example' })
export class Example {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 32 })
  name: string;

  @Column({ length: 32 })
  description: string;
  
  /*
   * Create and Update Date Columns
   */

//   @CreateDateColumn({ type: 'timestamp' })
//   public createdAt!: Date;

//   @UpdateDateColumn({ type: 'timestamp' })
//   public updatedAt!: Date;

  // @BeforeInsert()
  // async setId() {
  //   this.id = `exa_${nanoid(10)}`;
  // }
}
