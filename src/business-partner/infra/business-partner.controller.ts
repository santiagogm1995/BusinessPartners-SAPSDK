import { Controller, Get, Query } from '@nestjs/common';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';
import { BusinessPartnerService } from '../app/business-partner.service';

@Controller('business-partners')
export class BusinessPartnerController {
  constructor(
    private readonly businessPartnerService: BusinessPartnerService,
  ) {}

  @Get()
  async getOneBusinessPartners(
    @Query('id') id: string,
  ): Promise<BusinessPartner[]> {
    let result = new Array<BusinessPartner>();
    if (id !== undefined) {
      const obj = await this.businessPartnerService.getOneBusinessPartern(id);
      result.push(obj);
    } else {
      result = await this.businessPartnerService.getAllBusinessPartners();
    }

    return result;
  }
}
