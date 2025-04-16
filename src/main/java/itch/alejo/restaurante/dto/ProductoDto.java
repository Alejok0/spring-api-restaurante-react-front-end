package itch.alejo.restaurante.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductoDto {
    private Long id_producto;
    private String nombre;
    private String descripcion;
    private double precio;
    private int cantidad_stock;
    private String estado;

    // Constructor explícito para asegurar que se puede crear el objeto correctamente
    public ProductoDto(Long id_producto, String nombre, String descripcion, double precio, int cantidad_stock, String estado) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad_stock = cantidad_stock;
        this.estado = estado;
    }
}
