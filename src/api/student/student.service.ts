import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/database/entities/student.entity';
import { Repository } from 'typeorm';
import { CustomColumnService } from '../custom_columns/custom_column.service';
import { CreateStudentDto } from './dto/createStudentDto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,

    private customColumnService: CustomColumnService
  ) {}

  async getStudents() {
    const students = await this.studentRepository.find();
    return students;
  }

  async createStudent(createStudentData: CreateStudentDto) {
    const { name, age, rest } = createStudentData;

    const customColumns = await this.customColumnService.getcustomColumns({tableName:'student'})

    console.log(customColumns)

    const clientColumns = Object.keys(rest)
    const clientColumnsData = Object.values(rest)

    console.log(clientColumns)

    var dataToStore = {
      name,
      age,
      optionalParameters:rest,
      studentData:createStudentData
    }

    for (let i = 0; i < customColumns.length; i++) {
      // console.log(customColumns[i].customColumnName)
      // console.log(customColumns[i].displayName)
      // console.log(clientColumns[i])
      // console.log(clientColumnsData[i])
      if(clientColumns.includes(customColumns[i].displayName)){
        dataToStore = {
          ...dataToStore,
          [customColumns[i].customColumnName]:rest[`${customColumns[i].displayName}`]
        }
      }
      // if(customColumns[i].displayName === clientColumns[i]){
      //   dataToStore = {
      //     ...dataToStore,
      //     [customColumns[i].customColumnName]:clientColumnsData[i]
      //   }
      // }
    }

    console.log(dataToStore)

    // const dataToStore = {
    //   name,
    //   age,
    //   customColumn1: rest.email,
    //   customColumn2: rest.fatherName,
    //   optionalParameters: rest,
    //   studentData: createStudentData,
    // };

    const studentData = this.studentRepository.create(dataToStore);

    return await this.studentRepository.save(studentData);

    return
  }
}
