import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { SimService } from 'addmyproject/dist/SimService';
import {SingleSimactiveDTO} from 'addmyproject/dist/Dto/singlesimactive'
@Controller("Hologram_Sim_Controller/api/v1")
@ApiTags('Hologram_sim_Controller')
export class simcontroller {
  constructor(private readonly simservice: SimService) {}

  @Post(':id')
  @ApiOperation({ summary: 'active single sim' })
  @ApiParam({ name: 'id', description: 'active single sim' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
    async singlesimactive(@Param('id') Simnumber:string,@Query('apikey') apikey:string,  @Query() query: { [key: string]: string }, @Body() simactivedata:SingleSimactiveDTO)
    {
        
        try {
            console.log(Simnumber)
            console.log(apikey)

            const MokeRes: boolean | string = query.MockResponseonly;
                   const responseData = await this.simservice.singlesimactive(Simnumber,apikey,simactivedata,MokeRes);
                   return { message: 'data found succefully!', data: responseData };
          } catch (error) {
            console.error(error);
            throw error;
          }


    }
  /*  @Post('multisim')
    @ApiOperation({ summary: 'active multiple sim' })
    //@ApiParam({ name: 'sim', description: 'active single sim' })
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
    async Multiplesimactive(@Query('apikey') apikey:string,@Query() query: { [key: string]: string }, @Body() simactivedata:MultipleSimactiveDTO)
    {
        
        try {
            
            const MokeRes: boolean | string = query.MockResponseonly;
                    const responseData = await this.simservice.multisimactive(apikey,simactivedata,MokeRes);
            return { message: 'data found succefully!', data: responseData };
          } catch (error) {
            console.error(error);
            throw error;
          }


    }*/

}