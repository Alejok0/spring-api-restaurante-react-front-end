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
}