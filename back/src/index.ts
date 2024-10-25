import express from 'express';
import { AppDataSource } from './dataBase';
import router from './routes/commentsRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión a la base de datos establecida');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error en la conexión a la base de datos', error);
        process.exit(1);
    });

app.use('/comments', router);

app.get('/', (req, res) => {
    res.send('¡Hi DensityLabs and Ivan :)');
});
