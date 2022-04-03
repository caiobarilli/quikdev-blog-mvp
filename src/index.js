import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import './API/fakerApi';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App tab="home" />);
