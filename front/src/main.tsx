import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home.tsx';
import Category from './pages/Category/Category.tsx';
import Header from './components/Header.tsx';
import FooterNewsletter from './components/FooterNewsletter.tsx';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<App />} />
      </Routes>
      <FooterNewsletter />
    </BrowserRouter>
  </StrictMode>
)