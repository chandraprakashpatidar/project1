import { Controller,Post,Body,Get ,Res,HttpStatus, HttpCode ,Patch,Param,Delete, UseGuards,Req,Query} from '@nestjs/common';
//import { UsersService } from './user.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { MyService } from './myservice';
import axios from 'axios';
@Controller("extara")
@ApiTags('extra')
export class Usercontroller{
   
  constructor(private readonly myService: MyService) {}

  @Get()
  @ApiOperation({ summary: 'Get my data' })
  @ApiResponse({ status: 200, description: 'Success', type: Object })
  async getMyData() {
    try {
      const responseData = await this.myService.myserver();
      return { message: 'Hello, API!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  

}