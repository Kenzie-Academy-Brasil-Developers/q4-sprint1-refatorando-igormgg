import authenticateCompany from './authenticateCompany.middleware';
import validate from './validate.middleware';
import verifyCompanyExistence from './verifyCompanyExistence.middleware';
import verifyDuplicateCnpj from './verifyDuplicateCnpj.middleware';
import verifyDuplicateVehiclePlate from './verifyDuplicateVehiclePlate.middleware';
import verifyVehicleExistence from './verifyVehicleExistence.middleware';

export {
  authenticateCompany,
  validate,
  verifyCompanyExistence,
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  verifyVehicleExistence,
};
