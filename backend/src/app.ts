import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initializeDB } from './config/database';
import messageRoutes from './routes/messages.routes';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.database();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private async database(): Promise<void> {
        await initializeDB();
    }

    private routes(): void {
        this.app.use('/api/messages', messageRoutes);
        
        // Health check endpoint
        this.app.get('/api/health', (req, res) => {
            res.status(200).json({ status: 'OK' });
        });
    }
}

export default new App().app;