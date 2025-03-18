package itch.alejo.restaurante.service;

import itch.alejo.restaurante.dto.MenuDto;
import java.util.List;

public interface MenuService {
    MenuDto createMenu(MenuDto menuDto);
    MenuDto getMenuById(Long menuId);
    List<MenuDto> getAllMenus();
    MenuDto updateMenu(Long menuId, MenuDto menuDto);
    void deleteMenu(Long menuId);
}