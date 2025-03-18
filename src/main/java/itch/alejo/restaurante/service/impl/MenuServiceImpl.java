package itch.alejo.restaurante.service.impl;

import itch.alejo.restaurante.dto.MenuDto;
import itch.alejo.restaurante.entitty.Menu;
import itch.alejo.restaurante.exception.ResourceNotFoundException;
import itch.alejo.restaurante.mapper.MenuMapper;
import itch.alejo.restaurante.repository.MenuRepository;
import itch.alejo.restaurante.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MenuServiceImpl implements MenuService {
    private final MenuRepository menuRepository;

    @Override
    @Transactional
    public MenuDto createMenu(MenuDto menuDto) {
        Menu menu = MenuMapper.mapToMenu(menuDto);
        Menu savedMenu = menuRepository.save(menu);
        return MenuMapper.mapToMenuDto(savedMenu);
    }

    @Override
    public MenuDto getMenuById(Long menuId) {
        Menu menu = menuRepository.findById(menuId).orElseThrow(() ->
                new ResourceNotFoundException("No hay menú con ese id: " + menuId));
        return MenuMapper.mapToMenuDto(menu);
    }

    @Override
    public List<MenuDto> getAllMenus() {
        List<Menu> menus = menuRepository.findAll();
        return menus.stream().map(MenuMapper::mapToMenuDto).collect(Collectors.toList());
    }

    @Override
    public MenuDto updateMenu(Long menuId, MenuDto menuDto) {
        Menu menu = menuRepository.findById(menuId).orElseThrow(() ->
                new ResourceNotFoundException("El menú no existe: " + menuId));
        menu.setNombre(menuDto.getNombre());
        menu.setDescripcion(menuDto.getDescripcion());
        menu.setPrecio(menuDto.getPrecio());
        menu.setEstado(menuDto.getEstado());
        Menu updatedMenu = menuRepository.save(menu);
        return MenuMapper.mapToMenuDto(updatedMenu);
    }

    @Override
    public void deleteMenu(Long menuId) {
        menuRepository.deleteById(menuId);
    }
}