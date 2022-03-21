import express from 'express';
import expressListRoutes from 'express-list-routes';
import router from './routes';

const config = {
  secret: 'the_greatest_secret_key',
  expiresIn: '604800',
};

let app = express();

app.use(express.json());
app.use('/companies', router);

let companies = [];

expressListRoutes(app);

export { app, companies, config };
