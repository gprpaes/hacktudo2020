import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URI,
      entities: [],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
