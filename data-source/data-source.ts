import { typeOrmConfig } from 'src/config';
import { DataSource } from 'typeorm';

const AppDataSource: DataSource = new DataSource({
    ...typeOrmConfig,
});

export default AppDataSource;