import { ApiProperty } from '@nestjs/swagger';
import { Toy } from '../../toys/entities/toy.entity';

export class Child {
  @ApiProperty({
    description: 'The id of the child',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the child',
    example: 'Alice',
  })
  name: string;

  @ApiProperty({
    description: 'The address of the child',
    example: '123 Main Street',
  })
  address: string;

  @ApiProperty({
    description: 'Whether the child is nice or not',
    example: true,
  })
  isNice: boolean;
}

export class ChildWithToys extends Child {
  @ApiProperty({
    description: 'The list of toys assigned to the child',
    type: () => Toy,
    isArray: true,
  })
  toys: Toy[];
}
