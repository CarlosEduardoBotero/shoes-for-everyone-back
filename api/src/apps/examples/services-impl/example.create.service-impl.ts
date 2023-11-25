import { Injectable } from '@nestjs/common';
import { ExampleRepository } from '../example.repository';
import { CreateExampleDto } from '../dto/create-example.dto';

@Injectable()
export class CreateExampleServiceImpl {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async execute(createExampleDto: CreateExampleDto) {
    // create a new entity to run BD trigger
    const exampleToSave = this.exampleRepository.create(createExampleDto);
    return this.exampleRepository.save(exampleToSave);
  }
}
