import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@ApiSchema({
  name: 'CreateChildDto',
  description: 'Data transfer object for creating a child',
})
export class CreateChildDto {
  @ApiProperty({
    description: 'The name of the child',
    example: 'Alice',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The address of the child',
    example: '123 Main Street',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Whether the child is nice or not',
    example: true,
  })
  @IsBoolean()
  isNice: boolean;
}
