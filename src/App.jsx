import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PaginaPrincipal from './components/PaginaPrincipal';

import MenuComponent from './components/MenuComponent';
import ListaMenuComponent from './components/ListaMenuComponent';

import ProductoComponent from './components/ProductoComponent';
import ListaProductoComponent from './components/ListaProductoComponent';

import ListaOrdenesComponent from './components/ListaOrdenesComponent';
import ListaPagosComponent from './components/ListaPagosComponent';
import ListaEmpleadosComponent from './components/ListaEmpleadosComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* Página principal */}
        <Route path='/' element={<PaginaPrincipal />} />

        {/* Menú */}
        <Route path='/menu' element={<ListaMenuComponent />} />
        <Route path='/agregar-menu' element={<MenuComponent />} />
        <Route path='/editar-menu/:id' element={<MenuComponent />} />

        {/* Producto */}
        <Route path='/producto' element={<ListaProductoComponent />} />
        <Route path='/agregar-producto' element={<ProductoComponent />} />
        <Route path='/editar-producto/:id' element={<ProductoComponent />} />

        {/* Órdenes */}
        <Route path='/ordenes' element={<ListaOrdenesComponent />} />

        {/* Pagos */}
        <Route path='/pagos' element={<ListaPagosComponent />} />

        {/* Empleados */}
        <Route path='/empleados' element={<ListaEmpleadosComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
