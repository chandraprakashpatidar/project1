import { Injectable, Module } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MyService {
  async myserver() {
    try {
      const deviceId = 51736;
      const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
      const url = `https://dashboard.hologram.io/api/1/devices/names?orgid=${deviceId}&apikey=${apiKey}`;

      const response = await axios.get(url);
      console.log(response.data, 'Nest.js');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

@Module({
  providers: [MyService],
  exports: [MyService],
})
export class myservice {}
