import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KxService } from './kx.service';
import { CreateKxDto } from './dto/create-kx.dto';
import { UpdateKxDto } from './dto/update-kx.dto';

@Controller('kx')
export class KxController {
  constructor(private readonly kxService: KxService) {}

  @Post()
  create(@Body() createKxDto: CreateKxDto) {
    return this.kxService.create(createKxDto);
  }

  @Get()
  findAll() {
    return this.kxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKxDto: UpdateKxDto) {
    return this.kxService.update(+id, updateKxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kxService.remove(+id);
  }
}
