import { companies } from '../app';

const getCompaniesController = (req, res) => {
  res.status(200).json(companies);
};

export default getCompaniesController;
