package itch.alejo.restaurante.mapper;

import itch.alejo.restaurante.dto.MenuProductoDto;
import itch.alejo.restaurante.entitty.MenuProducto;

public class MenuProductoMapper {
    public static MenuProductoDto mapToMenuProductoDto(MenuProducto menuProducto) {
        return new MenuProductoDto(
                menuProducto.getId_menu_producto(),
                menuProducto.getMenu().getId_menu(),
                menuProducto.getProducto().getId_producto(),
                menuProducto.getCantidad()
        );
    }

    public static MenuProducto mapToMenuProducto(MenuProductoDto menuProductoDto) {
        MenuProducto menuProducto = new MenuProducto();
        menuProducto.setId_menu_producto(menuProductoDto.getId_menu_producto());
        menuProducto.setCantidad(menuProductoDto.getCantidad());
        return menuProducto;
    }
}