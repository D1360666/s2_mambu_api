import { Module } from '@nestjs/common';

import { AppService } from './app.service';

@Module({
  imports: [ClientModu],
  controllers: [AppController, ClientController],
  providers: [AppService],
})
export class AppModule {}
