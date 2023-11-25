import { Injectable } from '@nestjs/common';
import { ExampleRepository } from '../example.repository';

@Injectable()
export class GetAllExampleServiceImpl {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async execute() {
    return this.exampleRepository.find();
  }
}
