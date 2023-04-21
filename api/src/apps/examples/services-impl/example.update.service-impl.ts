import { Injectable } from "@nestjs/common";
import { ExampleRepository } from "../example.repository";
import { UpdateExampleDto } from "../dto/update-example.dto";
import { HelpersService } from "src/helpers/helpers.service";


@Injectable()
export class UpdateExamplerServiceImpl {
    constructor(
        private readonly exampleRepository: ExampleRepository,
        private readonly helpersService: HelpersService
    ) {}

    async execute(id: string, updateExampleDto: UpdateExampleDto) {
        this.helpersService.checkIdPrefix(id, 'exa_');
        const example = await this.exampleRepository.findOrFailById(id);
        // If example ID exists, update entity
        Object.entries(updateExampleDto).forEach(([key, value]) => {
          example[key] = value;
        });

        return this.exampleRepository.save(example);
    }
}
