import { Injectable } from '@nestjs/common';
import { GetRequestBuilderBase } from '@sap-cloud-sdk/core/dist/odata-common/request-builder/get-request-builder-base';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Injectable()
export class BusinessPartnerService {
  getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return BusinessPartner.requestBuilder()
      .getAll()
      .addCustomHeaders({
        APIKey: 'lLByvYskaIYLPFp4Zdvm9dGUEqSE3PKW',
        Accept: 'application/json',
      })
      .top(3)
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud/',
      });
  }

  getOneBusinessPartern(id: string): Promise<BusinessPartner> {
    return BusinessPartner.requestBuilder()
      .getByKey(id)
      .addCustomHeaders({
        APIKey: 'lLByvYskaIYLPFp4Zdvm9dGUEqSE3PKW',
        Accept: 'application/json',
      })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud/',
      });
  }
}