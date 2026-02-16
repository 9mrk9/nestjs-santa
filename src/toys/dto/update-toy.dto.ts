import { ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateToyDto } from './create-toy.dto';

@ApiSchema({
  name: 'UpdateToyDto',
  description: 'Data transfer object for updating a toy',
})
export class UpdateToyDto extends PartialType(CreateToyDto) {}
