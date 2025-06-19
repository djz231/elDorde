import { Request, Response } from 'express';
import { Message } from '../models/message.model';

export class MessageController {
  /**
   * @desc    Get last 10 messages
   * @route   GET /api/messages
   * @access  Public
   */
  public async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const messages = await Message.findAll({
        order: [['createdAt', 'DESC']], // koristi camelCase za Sequelize
        limit: 10,
      });

      // Ne mapiraj nazive, frontend očekuje camelCase
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({
        error: 'Server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * @desc    Create new message
   * @route   POST /api/messages
   * @access  Public
   */
  public async createMessage(req: Request, res: Response): Promise<void> {
    try {
      const { name, message } = req.body;

      if (!name || !message) {
        res.status(400).json({ error: 'Name and message are required' });
        return;
      }

      if (name.length > 100) {
        res.status(400).json({ error: 'Name must be less than 100 characters' });
        return;
      }

      const newMessage = await Message.create({ name, message });
      res.status(201).json(newMessage); // frontend će dobiti camelCase
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({
        error: 'Failed to create message',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}
