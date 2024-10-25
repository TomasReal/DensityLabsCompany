import { DataSource } from 'typeorm';

import { Comments } from './entities/comments.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Tomas.1996',
    database: 'pairingdensitylabs',
    synchronize: true,
    entities: [Comments],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch((error) =>
        console.error('Error en la conexión a la base de datos', error)
    );
