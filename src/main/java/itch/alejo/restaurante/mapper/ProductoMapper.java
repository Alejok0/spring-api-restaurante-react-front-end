package itch.alejo.restaurante.mapper;

import itch.alejo.restaurante.dto.ProductoDto;
import itch.alejo.restaurante.entitty.Producto;

public class ProductoMapper {
    public static ProductoDto mapToProductoDto(Producto producto) {
        return new ProductoDto(
                producto.getId_producto(),
                producto.getNombre(),
                producto.getDescripcion(),
                producto.getPrecio(),
                producto.getCantidad_stock(),
                producto.getEstado()
        );
    }

    public static Producto mapToProducto(ProductoDto productoDto) {
        Producto producto = new Producto();
        producto.setId_producto(productoDto.getId_producto());
        producto.setNombre(productoDto.getNombre());
        producto.setDescripcion(productoDto.getDescripcion());
        producto.setPrecio(productoDto.getPrecio());
        producto.setCantidad_stock(productoDto.getCantidad_stock());
        producto.setEstado(productoDto.getEstado());
        return producto;
    }
}