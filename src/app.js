import express from "express";
import morgan from "morgan";
import cors from 'cors';

import TasksRoutes from './routes/tasks_routes'
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Endpoints
app.get('', (req, res) => {
    res.json({message : 'Mandando json'});
});

app.use('/api/tasks', TasksRoutes)

export default app;