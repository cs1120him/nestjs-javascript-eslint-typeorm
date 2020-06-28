import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const ENV = process.env.NODE_ENV;

@Module({
    imports: [
        ConfigModule.load(path.resolve(__dirname, '*/**!(*.d).config.{ts,js}'), {
            path: path.resolve(process.cwd(), 'env', !ENV ? '.env.development' : `.env.${ENV}`),
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: config => config.get('database.config'),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
