import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildrenService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.child.findMany({
      include: { toys: true },
    });
  }

  async getOne(id: number) {
    const child = await this.prisma.child.findUnique({
      where: { id },
      include: { toys: true },
    });

    if (!child) throw new NotFoundException('Child not found');
    return child;
  }

  create(data: CreateChildDto) {
    return this.prisma.child.create({
      data,
      include: { toys: true },
    });
  }

  async update(id: number, data: UpdateChildDto) {
    await this.getOne(id);

    return this.prisma.child.update({
      where: { id },
      data,
      include: { toys: true },
    });
  }

  async delete(id: number) {
    await this.getOne(id);

    return this.prisma.child.delete({
      where: { id },
    });
  }

  async addToy(childId: number, toyId: number) {
    const child = await this.prisma.child.findUnique({
      where: { id: childId },
    });
    const toy = await this.prisma.toy.findUnique({ where: { id: toyId } });

    if (!child) throw new NotFoundException('Child not found');
    if (!toy) throw new NotFoundException('Toy not found');

    return this.prisma.child.update({
      where: { id: childId },
      data: { toys: { connect: { id: toyId } } },
      include: { toys: true },
    });
  }

  async removeToy(childId: number, toyId: number) {
    return this.prisma.child.update({
      where: { id: childId },
      data: { toys: { disconnect: { id: toyId } } },
      include: { toys: true },
    });
  }
}
