import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import AnalyticsWrapper from './utils/analytics';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AnalyticsWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)
