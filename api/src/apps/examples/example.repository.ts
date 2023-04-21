import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleEntity } from './entities/example.entity';

export class ExampleRepository extends Repository<ExampleEntity> {
    constructor(
        @InjectRepository(ExampleEntity)
        private exampleRepository: Repository<ExampleEntity>
    ) {
        super(exampleRepository.target, exampleRepository.manager, exampleRepository.queryRunner);
    }

    // sample method for demo purposes
    async findByName(name: string): Promise<ExampleEntity> {
        return await this.exampleRepository.findOneBy({ name });
        // could also be this.findOneBy({ email });, but depending on your IDE/TS settings,
        // could warn that exampleRepository is not used though. Up to you to use either of the 2 methods
    }

    async findOrFailById(id: string): Promise<ExampleEntity> {
        try {
            return await this.exampleRepository.findOneByOrFail({ id });
        } catch (EntityNotFoundError) {
            throw new NotFoundException(`ID não encontrado`);
        }
    }
}
