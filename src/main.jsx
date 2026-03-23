import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BootcampPage } from './pages/BootcampPage'
import { bootcamps } from './data/bootcamps'
import './styles/global.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div style={{padding:'40px',maxWidth:600,margin:'0 auto',fontFamily:'Inter,sans-serif'}}>
          <h1>SMX Summer Bootcamps 2026</h1>
          <p style={{color:'#666',margin:'12px 0 24px'}}>Landing pages — select a bootcamp:</p>
          {bootcamps.map(b => (
            <a key={b.slug} href={`/${b.slug}`} style={{display:'block',padding:'12px 0',color:'#2563eb',fontSize:16}}>
              {b.icon} {b.title}
            </a>
          ))}
        </div>
      } />
      {bootcamps.map(b => (
        <Route key={b.slug} path={`/${b.slug}`} element={<BootcampPage data={b} />} />
      ))}
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
