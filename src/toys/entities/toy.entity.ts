import { ApiProperty } from '@nestjs/swagger';
import { Material } from 'generated/prisma/client';

export class Toy {
  @ApiProperty({
    description: 'The id of the toy',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the toy',
    example: 'Teddy Bear',
  })
  name: string;

  @ApiProperty({
    description: 'The material of the toy',
    example: 'plastic',
    enumName: 'Material',
    enum: Material,
  })
  material: Material;

  @ApiProperty({
    description: 'The weight of the toy in kilograms',
    example: 0.5,
  })
  weight: number;
}
