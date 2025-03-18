package itch.alejo.restaurante.service;

import itch.alejo.restaurante.dto.ProductoDto;
import java.util.List;

public interface ProductoService {
    ProductoDto createProducto(ProductoDto productoDto);
    ProductoDto getProductoById(Long productoId);
    List<ProductoDto> getAllProductos();
    ProductoDto updateProducto(Long productoId, ProductoDto productoDto);
    void deleteProducto(Long productoId);
}