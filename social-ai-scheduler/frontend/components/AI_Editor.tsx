// frontend/components/AIEditor.tsx
import { useState } from 'react';
import api from '../utils/api';

export default function AIEditor() {
  const [post, setPost] = useState('');

  const generateContent = async () => {
    const response = await api.post('/generate', { prompt: 'Festive marketing post' });
    setPost(response.data.content);
  };

  return (
    <div>
      <button onClick={generateContent}>Generate</button>
      <textarea value={post} readOnly />
    </div>
  );
}