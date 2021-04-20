import { Injectable } from '@nestjs/common';
import { CreateKxDto } from './dto/create-kx.dto';
import { UpdateKxDto } from './dto/update-kx.dto';

@Injectable()
export class KxService {
  create(createKxDto: CreateKxDto) {
    return 'This action adds a new kx';
  }

  findAll() {
    return `This action returns all kx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kx`;
  }

  update(id: number, updateKxDto: UpdateKxDto) {
    return `This action updates a #${id} kx`;
  }

  remove(id: number) {
    return `This action removes a #${id} kx`;
  }
}
