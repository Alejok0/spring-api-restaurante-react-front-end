package itch.alejo.restaurante.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MenuProductoDto {
    private Long id_menu_producto;
    private Long id_menu;
    private Long id_producto;
    private int cantidad;
}