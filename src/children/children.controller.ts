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

@Controller('children')
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @Get()
  getAll() {
    return this.childrenService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.childrenService.getOne(+id);
  }

  @Post()
  create(@Body() body: CreateChildDto) {
    return this.childrenService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateChildDto) {
    return this.childrenService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.childrenService.delete(+id);
  }

  @Put(':childId/toys/:toyId')
  addToy(
    @Param('childId') childId: string,
    @Param('toyId') toyId: string,
  ) {
    return this.childrenService.addToy(+childId, +toyId);
  }

  @Delete(':childId/toys/:toyId')
  removeToy(
    @Param('childId') childId: string,
    @Param('toyId') toyId: string,
  ) {
    return this.childrenService.removeToy(+childId, +toyId);
  }
}
