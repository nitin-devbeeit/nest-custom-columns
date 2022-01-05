import { IsNotEmpty } from 'class-validator';
import { OptionalDataDto } from 'src/api/custom_columns/dto/createCustomColumnDto';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('custom_columns')
export class CustomColumnEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  tableName: string;

  @Column()
  @IsNotEmpty()
  customColumnName: string;

  @Column()
  @IsNotEmpty()
  displayName: string;

  @Column({nullable:true})
  type: string;

  @Column({type:"jsonb",nullable:true})
  optionalData: OptionalDataDto

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
