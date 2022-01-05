import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('parent')
export class ParentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  age: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn1: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn2: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn3: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn4: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn5: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn6: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn7: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn8: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn9: string;

  @Column({nullable:true})
  @IsNotEmpty()
  customColumn10: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;

  @Column({ nullable: true })
  deletedBy: number;

  @Column({ nullable: true, default: true })
  isActive: boolean;
}
