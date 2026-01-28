import { createRoot } from 'react-dom/client'
import './index.css'
import './background.css'
import App from './App.tsx'

createRoot(document.querySelector('body')!).render(<App />)
