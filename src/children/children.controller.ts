import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Child, ChildWithToys } from './entities/child.entity';

@ApiTags('children')
@Controller('children')
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @ApiOperation({
    summary: 'Retrieve a list of all children',
  })
  @ApiResponse({
    status: 200,
    description: 'The children have been successfully retrieved.',
    isArray: true,
    type: ChildWithToys,
  })
  @Get()
  getAll() {
    return this.childrenService.getAll();
  }

  @ApiOperation({
    summary: 'Retrieve a child by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Child not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The child has been successfully retrieved.',
    type: ChildWithToys,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of a child',
    type: Number,
    example: 1,
  })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.childrenService.getOne(+id);
  }

  @ApiOperation({
    summary: 'Create a child',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid input data.',
  })
  @ApiResponse({
    status: 201,
    description: 'The child has been successfully created.',
    type: ChildWithToys,
  })
  @ApiBody({ type: CreateChildDto })
  @Post()
  create(@Body() body: CreateChildDto) {
    return this.childrenService.create(body);
  }

  @ApiOperation({
    summary: 'Update a child',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format or input data.',
  })
  @ApiResponse({
    status: 404,
    description: 'Child not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The child has been successfully updated.',
    type: ChildWithToys,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of a child',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateChildDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateChildDto) {
    return this.childrenService.update(+id, body);
  }

  @ApiOperation({
    summary: 'Delete a child',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Child not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The child has been successfully deleted.',
    type: Child,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of a child',
    type: Number,
    example: 1,
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.childrenService.delete(+id);
  }

  @ApiOperation({
    summary: 'Assign a toy to a child',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Child or Toy not found.',
  })
  @ApiResponse({
    status: 409,
    description: 'The child isn\'t nice so a toy cannot be assigned.',
  })
  @ApiResponse({
    status: 200,
    description: 'The toy has been successfully added to the child.',
    type: ChildWithToys,
  })
  @ApiParam({
    name: 'childId',
    description: 'The id of a child',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'toyId',
    description: 'The id of a toy',
    type: Number,
    example: 1,
  })
  @Put(':childId/toys/:toyId')
  addToy(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.addToy(+childId, +toyId);
  }

  @ApiOperation({
    summary: 'Remove a toy from a child',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid ID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Child or Toy not found.',
  })
  @ApiResponse({
    status: 200,
    description: 'The toy has been successfully removed from the child.',
    type: ChildWithToys,
  })
  @ApiParam({
    name: 'childId',
    description: 'The id of a child',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'toyId',
    description: 'The id of a toy',
    type: Number,
    example: 1,
  })
  @Delete(':childId/toys/:toyId')
  removeToy(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.removeToy(+childId, +toyId);
  }
}
