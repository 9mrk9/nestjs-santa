import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Injectable()
export class ToysService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.toy.findMany();
  }

  async getOne(id: number) {
    const toy = await this.prisma.toy.findUnique({ where: { id } });
    if (!toy) throw new NotFoundException('Toy not found');
    return toy;
  }

  create(data: CreateToyDto) {
    return this.prisma.toy.create({ data });
  }

  async update(id: number, data: UpdateToyDto) {
    await this.getOne(id);
    return this.prisma.toy.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.getOne(id);
    return this.prisma.toy.delete({ where: { id } });
  }
}
