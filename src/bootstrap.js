import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const domElement = document.querySelector('#root-c3');
const root = createRoot(domElement);

root.render(<App />);
