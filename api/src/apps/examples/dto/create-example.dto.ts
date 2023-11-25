import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

// Where validations and transformations live
// 'class-transformer' and 'class-validator'

export class CreateExampleDto {
  @ApiProperty({
    type: String,
    description: 'Required property',
    example: 'lorem ipsum',
  })
  @IsNotEmpty()
  @MaxLength(32)
  name: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Optional property',
    example: 'long lorem ipsum',
  })
  @IsOptional()
  @MaxLength(128)
  description: string;
}
