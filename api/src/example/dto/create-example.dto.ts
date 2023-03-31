import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

// Where validations and transformations live
// 'class-transformer' and 'class-validator'

export class CreateExampleDto {
    @IsNotEmpty()
    @MaxLength(32)
    name: string;

    @IsOptional()
    @MaxLength(128)
    description: string;
}
