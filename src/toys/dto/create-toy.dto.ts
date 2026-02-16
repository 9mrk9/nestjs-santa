import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Material } from 'generated/prisma/client';

@ApiSchema({
  name: 'CreateToyDto',
  description: 'Data transfer object for creating a toy',
})
export class CreateToyDto {
  @ApiProperty({
    description: 'The name of the toy',
    example: 'Teddy Bear',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The material of the toy',
    example: 'plastic',
    enumName: 'Material',
    enum: Material,
  })
  @IsEnum(Material)
  material: Material;

  @ApiProperty({
    description: 'The weight of the toy in kilograms',
    example: 0.5,
  })
  @IsNumber()
  @IsPositive()
  weight: number;
}
