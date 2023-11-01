import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  exports: [CatsService],
  providers: [CatsService],
})
export class CatsModule {}
