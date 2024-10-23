import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), UsersModule],
    controllers: [UsersController]
})
export class UsersModule { }
