package itch.alejo.restaurante.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MenuDto {
    private Long id_menu;
    private String nombre;
    private String descripcion;
    private double precio;
    private String estado;
    private List<MenuProductoDto> productos;
}