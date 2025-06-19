import { useEffect, useState } from 'react';
import axios from 'axios';
import type { RawMessage } from '../types';

export const MessageList = () => {
  const [messages, setMessages] = useState<RawMessage[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<RawMessage[]>('http://localhost:3001/api/messages')
      .then(res => {
        // Pošto backend vraća već camelCase, ne moraš da mapiraš
        setMessages(res.data);
      })
      .catch(err => {
        console.error('Error loading messages:', err);
        setError('Failed to load messages');
      });
  }, []);

  return (
    <div>
      <h2>Recent Messages</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.name}</strong> ({new Date(msg.createdAt).toLocaleString()}):
            <br />
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
