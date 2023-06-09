import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { ExampleDto } from './dto/example-dto';
import { Public } from '../auth/decorators/public.decorator';

@Public()
@ApiTags('demo')
@ApiExtraModels(ExampleDto)
@Controller({
  path: 'example',
  version: '0',
})
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  @ApiOperation({ summary: 'Create some resource' })
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    schema: {
      $ref: getSchemaPath(ExampleDto),
    },
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async create(@Body() createExampleDto: CreateExampleDto) {
    return await this.exampleService.create(createExampleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Returns a list of resources' })
  @ApiOkResponse({
    description: 'The resources were returned successfully',
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(ExampleDto),
      },
    },
  })
  async findAll() {
    return await this.exampleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns a resource by ID' })
  @ApiOkResponse({
    description: 'The resource was returned successfully',
    schema: {
      $ref: getSchemaPath(ExampleDto),
    },
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  async findOne(@Param('id') id: string) {
    return await this.exampleService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a resource by ID' })
  @ApiOkResponse({
    description: 'The resource was updated successfully',
    schema: {
      $ref: getSchemaPath(ExampleDto),
    },
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  async update(
    @Param('id') id: string,
    @Body() updateExampleDto: UpdateExampleDto,
  ) {
    return await this.exampleService.update(id, updateExampleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a resource by ID' })
  @ApiOkResponse({ description: 'The resource was deleted successfully' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  remove(@Param('id') id: string) {
    return this.exampleService.remove(id);
  }
}
