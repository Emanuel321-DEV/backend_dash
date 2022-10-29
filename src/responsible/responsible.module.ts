import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from './models/responsible.entity';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([ResponsibleEntity])
    ],
    providers: [ResponsibleService],
    controllers: [ResponsibleController],
})

export class ResponsibleModule {}
