import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService {
  // inject repository here
  constructor(
    private readonly exampleRepository: ExampleRepository
  ) {}

  create(createExampleDto: CreateExampleDto) {
    // create a new entity to run BD trigger
    const exampleToSave = this.exampleRepository.create(createExampleDto);
    return this.exampleRepository.save(exampleToSave);
  }

  findAll() {
    return this.exampleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  async update(id: string, updateExampleDto: UpdateExampleDto) {

    const example = await this.exampleRepository.findOrFailById(id);
    // If example ID exists, update entity
    Object.entries(updateExampleDto).forEach(([key, value]) => {
      example[key] = value;
    });

    return this.exampleRepository.save(example);
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
