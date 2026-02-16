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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('toys')
@Controller('toys')
export class ToysController {
  constructor(private toysService: ToysService) {}

  @ApiResponse({
    status: 200,
    description: 'The toys have been successfully retrieved.',
  })
  @Get()
  getAll() {
    return this.toysService.getAll();
  }

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
  })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.toysService.getOne(+id);
  }

  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid input data.',
  })
  @ApiResponse({
    status: 201,
    description: 'The toy has been successfully created.',
  })
  @Post()
  create(@Body() body: CreateToyDto) {
    return this.toysService.create(body);
  }

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
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateToyDto) {
    return this.toysService.update(+id, body);
  }

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
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.toysService.delete(+id);
  }
}
