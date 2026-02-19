import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Toy } from './entities/toy.entity';

@ApiTags('toys')
@Controller('toys')
export class ToysController {
  constructor(private toysService: ToysService) {}

  @ApiOperation({
    summary: 'Retrieve a list of toys'
  })
  @ApiResponse({
    status: 200,
    description: 'The toys have been successfully retrieved.',
    type: Toy,
    isArray: true
  })
  @Get()
  getAll() {
    return this.toysService.getAll();
  }

  @ApiOperation({
    summary: 'Retrieve a toy by id',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Toy not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The toy has been successfully retrieved.',
    type: Toy
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the toy',
    type: Number,
    example: 1,
  })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.toysService.getOne(+id);
  }

  @ApiOperation({
    summary: 'Create a toy'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid input data.',
  })
  @ApiResponse({
    status: 201,
    description: 'The toy has been successfully created.',
    type: Toy
  })
  @ApiBody({ type: CreateToyDto })
  @Post()
  create(@Body() body: CreateToyDto) {
    return this.toysService.create(body);
  }

  @ApiOperation({
    summary: 'Update a toy'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format or input data.',
  })
  @ApiResponse({
    status: 404,
    description: 'Toy not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The toy has been successfully updated.',
    type: Toy
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the toy',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateToyDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateToyDto) {
    return this.toysService.update(+id, body);
  }

  @ApiOperation({
    summary: 'Delete a toy'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Toy not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The toy has been successfully deleted.',
    type: Toy
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the toy',
    type: Number,
    example: 1,
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.toysService.delete(+id);
  }
}
