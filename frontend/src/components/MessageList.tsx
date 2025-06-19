import { useEffect, useState } from 'react';
import axios from 'axios';
import type { RawMessage } from '../types';

interface PaginatedResponse {
  messages: RawMessage[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export const MessageList = () => {
  const [messages, setMessages] = useState<RawMessage[]>([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMessages = async (pageNum: number) => {
    try {
      const res = await axios.get<PaginatedResponse>(
        `http://localhost:3001/api/messages?page=${pageNum}&limit=10`
      );
      setMessages(res.data.messages);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages');
    }
  };

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  return (
    <div>
      <h2>Recent Messages</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.name}</strong> ({new Date(msg.createdAt).toLocaleString()}):<br />
            {msg.message}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
          Previous
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
