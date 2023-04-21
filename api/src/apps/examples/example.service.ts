import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { CreateExampleServiceImpl } from './services-impl/example.create.service-impl';
import { GetAllExampleServiceImpl } from './services-impl/example.get-all.service-impl';
import { GetExampleServiceImpl } from './services-impl/example.get.service-impl';
import { UpdateExamplerServiceImpl } from './services-impl/example.update.service-impl';

@Injectable()
export class ExampleService {
  // inject repository here
  constructor(
    private readonly createExampleServiceImpl: CreateExampleServiceImpl,
    private readonly getAllExampleServiceImpl: GetAllExampleServiceImpl,
    private readonly getExampleServiceImpl: GetExampleServiceImpl,
    private readonly updateExamplerServiceImpl: UpdateExamplerServiceImpl
  ) {}

  async create(createExampleDto: CreateExampleDto) {
    return this.createExampleServiceImpl.execute(createExampleDto);
  }

  async findAll() {
    return this.getAllExampleServiceImpl.execute();
  }

  async findOne(id: string) {
    return await this.getExampleServiceImpl.execute(id);
  }

  async update(id: string, updateExampleDto: UpdateExampleDto) {
    return this.updateExamplerServiceImpl.execute(id, updateExampleDto);
  }

  remove(id: string) {
    return `This action removes a #${id} example`;
  }
}
