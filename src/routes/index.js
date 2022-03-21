import {
  companiesLoginController,
  companiesRegisterController,
  deleteCompaniesController,
  deleteVehiclesController,
  getCompaniesController,
  getVehiclesController,
  postVehiclesController,
  putCompaniesController,
  putVehiclesController,
} from '../controllers';

import {
  authenticateCompany,
  validate,
  verifyCompanyExistence,
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  verifyVehicleExistence,
} from '../middlewares';

import { companySchema, vehicleSchema } from '../models';
import { Router } from 'express';

const router = Router();

router.post(
  '/register',
  validate(companySchema),
  verifyDuplicateCnpj,
  companiesRegisterController
);

router.post('/login', companiesLoginController);

router.get('', getCompaniesController);

router.put(
  '/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  putCompaniesController
);

router.delete(
  '/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  deleteCompaniesController
);

router.post(
  '/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validate(vehicleSchema),
  postVehiclesController
);

router.get(
  '/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  getVehiclesController
);

router.put(
  '/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  putVehiclesController
);

router.delete(
  '/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  deleteVehiclesController
);

export default router;
