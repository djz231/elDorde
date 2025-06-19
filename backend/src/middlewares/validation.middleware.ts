import { Request, Response, NextFunction } from 'express';

export const validateMessageInput = (req: Request, res: Response, next: NextFunction): void => {
    const { name, message } = req.body;
    
    if (!name || !name.trim()) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }

    if (!message || !message.trim()) {
        res.status(400).json({ error: 'Message is required' });
        return;
    }

    if (name.length > 100) {
        res.status(400).json({ error: 'Name must be less than 100 characters' });
        return;
    }

    next();
};