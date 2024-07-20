import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@/styles/App.sass';
import './index.scss'
import "@/lang/config.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)