import { Test, TestingModule } from '@nestjs/testing';
import {BusinessPartnerController } from '../infra/business-partner.controller'
import { BusinessPartnerService } from '../app/business-partner.service';


describe('AppController', () => {
  let appController: BusinessPartnerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BusinessPartnerController],
      providers: [BusinessPartnerService],
    }).compile();

    appController = app.get<BusinessPartnerController>(BusinessPartnerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getOneBusinessPartners).toBeInstanceOf(Function);
    });
  });
});
