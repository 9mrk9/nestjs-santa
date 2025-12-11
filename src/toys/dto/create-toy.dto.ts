import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Material } from 'generated/prisma/client';

export class CreateToyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Material)
  material: Material;

  @IsNumber()
  @IsPositive()
  weight: number;
}
