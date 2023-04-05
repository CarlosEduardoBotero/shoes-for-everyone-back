import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ExampleDto {
  @ApiProperty({
    type: String,
    description: 'Resource ID',
    example: 'exa_otM8629km-B9',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Required property',
    example: 'lorem ipsum',
  })
  name: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Optional property',
    example: 'long lorem ipsum',
  })
  description: string;
}
