import { Module } from '@nestjs/common';
import { MyService } from './myservice';

@Module({
  providers: [MyService],
  exports: [MyService],
})
export class MyModule {}
