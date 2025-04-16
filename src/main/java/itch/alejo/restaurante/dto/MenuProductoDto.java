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

    // Constructor explícito para asegurar que se puede crear el objeto correctamente
    public MenuProductoDto(Long id_menu_producto, Long id_menu, Long id_producto, int cantidad) {
        this.id_menu_producto = id_menu_producto;
        this.id_menu = id_menu;
        this.id_producto = id_producto;
        this.cantidad = cantidad;
    }
}
