import { ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateChildDto } from './create-child.dto';

@ApiSchema({
  name: 'UpdateChildDto',
  description: 'Data transfer object for updating a child',
})
export class UpdateChildDto extends PartialType(CreateChildDto) {}
