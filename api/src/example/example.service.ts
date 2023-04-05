import { Injectable } from '@nestjs/common';
import { HelpersService } from 'src/helpers/helpers.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService {
  // inject repository here
  constructor(
    private readonly exampleRepository: ExampleRepository,
    private readonly helpersService: HelpersService,
  ) {}

  create(createExampleDto: CreateExampleDto) {
    // create a new entity to run BD trigger
    const exampleToSave = this.exampleRepository.create(createExampleDto);
    return this.exampleRepository.save(exampleToSave);
  }

  findAll() {
    return this.exampleRepository.find();
  }

  async findOne(id: string) {
    this.helpersService.checkIdPrefix(id, 'exa_');
    return await this.exampleRepository.findOrFailById(id);
  }

  async update(id: string, updateExampleDto: UpdateExampleDto) {
    this.helpersService.checkIdPrefix(id, 'exa_');
    const example = await this.exampleRepository.findOrFailById(id);
    // If example ID exists, update entity
    Object.entries(updateExampleDto).forEach(([key, value]) => {
      example[key] = value;
    });

    return this.exampleRepository.save(example);
  }

  remove(id: string) {
    return `This action removes a #${id} example`;
  }
}
