"use client";
import Image from "next/image";
import axios from 'axios';

import { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/').then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
}

