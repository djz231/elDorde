import { MessageList } from '../components/MessageList';
import { Link } from 'react-router-dom';

export const HomePage = () => (
  <div>
    <h1>Guestbook</h1>
    <p>See what people wrote about us and feel free to leave a message.</p>
    <MessageList />
    <Link to="/message"><button>Leave a message</button></Link>
  </div>
);