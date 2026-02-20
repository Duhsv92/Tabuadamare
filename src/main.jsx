import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TideApp from './tabua-mare'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TideApp />
  </StrictMode>,
)
