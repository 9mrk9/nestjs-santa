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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('children')
@Controller('children')
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @ApiResponse({
    status: 200,
    description: 'The children have been successfully retrieved.',
  })
  @Get()
  getAll() {
    return this.childrenService.getAll();
  }

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
  })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.childrenService.getOne(+id);
  }

  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid input data.',
  })
  @ApiResponse({
    status: 201,
    description: 'The child has been successfully created.',
  })
  @Post()
  create(@Body() body: CreateChildDto) {
    return this.childrenService.create(body);
  }

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
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateChildDto) {
    return this.childrenService.update(+id, body);
  }

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
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.childrenService.delete(+id);
  }

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
    description: 'The toy has been successfully added to the child.',
  })
  @Put(':childId/toys/:toyId')
  addToy(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.addToy(+childId, +toyId);
  }

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
  })
  @Delete(':childId/toys/:toyId')
  removeToy(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.removeToy(+childId, +toyId);
  }
}
