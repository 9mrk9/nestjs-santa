import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToysModule } from './toys/toys.module';
import { ChildrenModule } from './children/children.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ToysModule,
    ChildrenModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
