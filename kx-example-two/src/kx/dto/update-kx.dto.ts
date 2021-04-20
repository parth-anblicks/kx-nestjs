import { PartialType } from '@nestjs/mapped-types';
import { CreateKxDto } from './create-kx.dto';

export class UpdateKxDto extends PartialType(CreateKxDto) {}
