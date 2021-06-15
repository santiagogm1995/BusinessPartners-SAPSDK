import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusinessPartnerController } from './business-partner/infra/business-partner.controller';
import { BusinessPartnerService } from './business-partner/app/business-partner.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BusinessPartnerController],
  providers: [BusinessPartnerService],
})
export class AppModule {}
