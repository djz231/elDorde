import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus('Name and message are required.');
      return;
    }

    setDisabled(true);
    setStatus('Sending...');

    try {
      await axios.post('http://localhost:3001/api/messages', { name, message });
      setStatus('Success');
      setTimeout(() => navigate('/'), 1000);
    } catch {
      setStatus('Failed to send message.');
      setDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message</label><br />
        <input
          id="message"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name</label><br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={disabled}>Post</button>
      <p>{status}</p>
    </form>
  );
};
