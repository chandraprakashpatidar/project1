import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Authmodule } from './auth/auth.module';
import { Hologramcontroller } from './hologram.controller';
import { user, userschema } from './user.schema';
import { UsersService } from './user.service';
import { DeviceService } from './device/device.service';
import { MockServerController } from './mock-server';
import { NetworkService } from './device/networkservice';
import { AxiosProvider } from './device/axios.provider'; 
import { HttpModule } from '@nestjs/axios';
//import { MyModule } from 'addmyproject/src/mymodule';
import {MyService } from 'addmyproject/dist/myservice'
import { DeviceController } from '../src/device/device.controller';
import { simcontroller } from './simcontroller';
//import { DeviceController } from './device/device.controller';
import {SimService} from 'addmyproject/dist/SimService'

@Module({
  imports: [
   // MyModule,
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mynestjs'),
    MongooseModule.forFeature([{ name: user.name, schema: userschema }]),
  ],
  controllers: [Hologramcontroller, MockServerController ,simcontroller],
  providers: [
    UsersService,
    Authmodule,
    DeviceService,
    NetworkService,
    AxiosProvider,MyService,SimService
  ],
  exports: [NetworkService],
})
export class AppModule {}

``
