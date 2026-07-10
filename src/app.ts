import express from 'express'
import cors from 'cors'
import { registroRoutes } from './routes/registro.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/registros',registroRoutes);

export {app};
