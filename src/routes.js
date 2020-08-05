import { Router } from 'express';
import cors from 'cors';

const routes = Router();
routes.use(cors());
routes.get('/', (req, res) => res.json({ result: 'CARD-API' }));


export default routes;
