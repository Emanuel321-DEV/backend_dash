import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from './models/responsible.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([ResponsibleEntity])
    ],
    providers: [],
    controllers: [],
})

export class ResponsibleModule {}
