import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { ComponentsModule } from './components/components.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql' as const,
        host: configService.get<string>('DB_HOST', '3.83.64.248'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USER', 'insat'),
        password: configService.get<string>('DB_PASS', 'urba2022'),
        database: configService.get<string>('DB_NAME', 'projet'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    MenuItemsModule,
    ComponentsModule,
  ],
})
export class AppModule {}
