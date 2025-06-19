import { Router } from 'express';
import { MessageController } from '../controllers/messages.controller';
import { validateMessageInput } from '../middlewares/validation.middleware';

const router = Router();
const messageController = new MessageController();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Guestbook messages handling
 */

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Get last 10 messages
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: List of messages
 *       500:
 *         description: Server error
 */
router.get('/', messageController.getMessages);

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Create new message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               message:
 *                 type: string
 *                 example: Hello world!
 *     responses:
 *       201:
 *         description: Message created
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post('/', validateMessageInput, messageController.createMessage);

export default router;