import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Controller('toys')
export class ToysController {
  constructor(private toysService: ToysService) {}

  @Get()
  getAll() {
    return this.toysService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.toysService.getOne(+id);
  }

  @Post()
  create(@Body() body: CreateToyDto) {
    return this.toysService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateToyDto) {
    return this.toysService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.toysService.delete(+id);
  }
}
