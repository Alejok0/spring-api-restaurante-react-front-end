package itch.alejo.restaurante.mapper;

import itch.alejo.restaurante.dto.MenuDto;
import itch.alejo.restaurante.entitty.Menu;

public class MenuMapper {
    public static MenuDto mapToMenuDto(Menu menu) {
        return new MenuDto(
                menu.getId_menu(),
                menu.getNombre(),
                menu.getDescripcion(),
                menu.getPrecio(),
                menu.getEstado(),
                menu.getProductos().stream()
                        .map(MenuProductoMapper::mapToMenuProductoDto)
                        .toList()
        );
    }

    public static Menu mapToMenu(MenuDto menuDto) {
        Menu menu = new Menu();
        menu.setId_menu(menuDto.getId_menu());
        menu.setNombre(menuDto.getNombre());
        menu.setDescripcion(menuDto.getDescripcion());
        menu.setPrecio(menuDto.getPrecio());
        menu.setEstado(menuDto.getEstado());
        return menu;
    }
}