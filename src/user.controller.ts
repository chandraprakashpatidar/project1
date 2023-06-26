import { Controller,Post,Body,Get ,Res,HttpStatus, HttpCode ,Patch,Param,Delete, UseGuards,Req,Query,} from '@nestjs/common';
import { UsersService } from './user.service';
import { HttpService } from '@nestjs/axios';
import { user } from './user.schema';
//import { userdto } from './user.dto';
//import { userint } from './user.interface';
import { response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Authmodule } from './auth/auth.module';
//import { ApiTags } from '@nestjs/swagger';
import { ApiTags, ApiResponse, ApiOperation ,ApiParam} from '@nestjs/swagger';
import { MyService } from 'addmyproject/dist/myservice';

@Controller('mycontroller')
@ApiTags('test')
export class Usercontroller{
    constructor(private readonly usersService: UsersService,
           // private readonly deviceController: DeviceController,
          private readonly myservice:MyService,
    
     ) {}

     @Get(':id')
     @ApiOperation({ summary: 'Get device by ID' })
     @ApiParam({ name: 'id', description: 'Device ID' })
     @ApiResponse({ status: 200, description: 'Success',  })
     @ApiResponse({ status: 400, description: 'Bad Request' })
     async getDeviceById( @Param('id') id: string): Promise<any> {
       try {
         console.log(id);
         const responseData = await this.myservice.myserver();
         console.log(responseData, 'response');
         return { message: 'data found succefully!', data: responseData };
       } catch (error) {
         return response.status(HttpStatus.BAD_REQUEST).json({
           statusCode: HttpStatus.BAD_REQUEST,
           message: 'Error',
           error: 'Bad request',
         });
       }
     }

     @Get(':id/org')
  @ApiOperation({ summary: 'Get device by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async getDeviceByorgid(@Param('id') id: string):Promise<any> {
    try {
      console.log(id);
      const responseData = await this.myservice.deviceid(id);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


@Get(':id/name')
@ApiOperation({ summary: 'Get device by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async getDeviceByname(@Param('id') id: string):Promise<any> {
    try {
      console.log(id);
      const responseData = await this.myservice.getDeviceByName(id);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



  @Get(':id/deivceid')
  @ApiOperation({ summary: 'Get device by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async getDeviceid(@Param('id') id: string) {
    try {
      console.log(id);
      const responseData = await this.myservice.getDeviceid(id);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get(':id/deviceLoction')
  @ApiOperation({ summary: 'Get device by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async getdevicelocationByordid(@Param('id') id: string) {
    try {
      console.log(id);
      const responseData = await this.myservice.getdevicelocationByordid(id);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }





}
