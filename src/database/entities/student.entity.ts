import { IsNotEmpty } from 'class-validator';
import { CreateStudentDto, RestParameters } from 'src/api/student/dto/createStudentDto';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('student')
export class StudentEntity {
  
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

  @Column({type:"jsonb",nullable:true})
  @IsNotEmpty()
  optionalParameters: RestParameters;

  @Column({type:"jsonb",nullable:true})
  @IsNotEmpty()
  studentData: CreateStudentDto;

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
