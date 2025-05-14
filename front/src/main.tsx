import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home.tsx';
import Category from './pages/Category/Category.tsx';
import Header from './components/header/Header.tsx';
import FooterNewsletter from './components/footerNewsletter/FooterNewsletter.tsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.tsx';
// import Contact from './pages/Contact/Contact.tsx'

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<ProductDetail />} />
        <Route path="/:type" element={<Category />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <FooterNewsletter />
    </BrowserRouter>
  </StrictMode>
)