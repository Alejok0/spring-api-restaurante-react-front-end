package itch.alejo.restaurante.service.impl;

import itch.alejo.restaurante.dto.ProductoDto;
import itch.alejo.restaurante.entitty.Producto;
import itch.alejo.restaurante.exception.ResourceNotFoundException;
import itch.alejo.restaurante.mapper.ProductoMapper;
import itch.alejo.restaurante.repository.ProductoRepository;
import itch.alejo.restaurante.service.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductoServiceImpl implements ProductoService {
    private final ProductoRepository productoRepository;

    @Override
    @Transactional
    public ProductoDto createProducto(ProductoDto productoDto) {
        Producto producto = ProductoMapper.mapToProducto(productoDto);
        Producto savedProducto = productoRepository.save(producto);
        return ProductoMapper.mapToProductoDto(savedProducto);
    }

    @Override
    public ProductoDto getProductoById(Long productoId) {
        Producto producto = productoRepository.findById(productoId).orElseThrow(() ->
                new ResourceNotFoundException("No hay producto con ese id: " + productoId));
        return ProductoMapper.mapToProductoDto(producto);
    }

    @Override
    public List<ProductoDto> getAllProductos() {
        List<Producto> productos = productoRepository.findAll();
        return productos.stream().map(ProductoMapper::mapToProductoDto).collect(Collectors.toList());
    }

    @Override
    public ProductoDto updateProducto(Long productoId, ProductoDto productoDto) {
        Producto producto = productoRepository.findById(productoId).orElseThrow(() ->
                new ResourceNotFoundException("El producto no existe: " + productoId));
        producto.setNombre(productoDto.getNombre());
        producto.setDescripcion(productoDto.getDescripcion());
        producto.setPrecio(productoDto.getPrecio());
        producto.setCantidad_stock(productoDto.getCantidad_stock());
        producto.setEstado(productoDto.getEstado());
        Producto updatedProducto = productoRepository.save(producto);
        return ProductoMapper.mapToProductoDto(updatedProducto);
    }

    @Override
    public void deleteProducto(Long productoId) {
        productoRepository.deleteById(productoId);
    }
}