import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AbilityModule } from './ability/ability.module';
import { CharacterModul } from './character/character.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    AbilityModule,
    CharacterModul,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
