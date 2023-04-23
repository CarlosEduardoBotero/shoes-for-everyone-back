import { Injectable } from '@nestjs/common';
import { ExampleRepository } from '../example.repository';
import { HelpersService } from 'src/helpers/helpers.service';

@Injectable()
export class GetExampleServiceImpl {
  constructor(
    private readonly exampleRepository: ExampleRepository,
    private readonly helpersService: HelpersService,
  ) {}

  async execute(id: string) {
    this.helpersService.checkIdPrefix(id, 'exa_');
    return await this.exampleRepository.findOrFailById(id);
  }
}
