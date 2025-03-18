import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/PaginaPrincipal'

import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MenuComponent from './components/MenuComponent'
import ProductoComponent from './components/ProductoComponent'

import ListaProductoComponent from './components/ListaProductoComponent'
import ListaMenuComponent from './components/ListaMenuComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<Index />} />

          {/* http://localhost:3000/menu */}
          <Route path='/menu' element={<ListaMenuComponent />} />
          <Route path='/agregar-menu/' element={<MenuComponent />} />
          <Route path='/editar-menu/:id' element={<MenuComponent />} />

          <Route path='/producto' element={<ListaProductoComponent />} />
          <Route path='/agregar-producto/' element={<ProductoComponent />} />
          <Route path='/editar-producto/:id' element={<ProductoComponent />} />

          {/* http://localhost:3000/formulario/:id 
          <Route path='/formulario/:id' element={<AlumnoComponent />} />
            */}
    

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App;
