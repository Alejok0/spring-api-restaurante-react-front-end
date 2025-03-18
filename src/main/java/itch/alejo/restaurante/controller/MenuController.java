package itch.alejo.restaurante.controller;

import itch.alejo.restaurante.dto.MenuDto;
import itch.alejo.restaurante.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurante/menus")
@AllArgsConstructor
public class MenuController {
    private final MenuService menuService;

    @PostMapping
    public ResponseEntity<MenuDto> createMenu(@RequestBody MenuDto menuDto) {
        MenuDto savedMenu = menuService.createMenu(menuDto);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuDto> getMenuById(@PathVariable Long id) {
        MenuDto menuDto = menuService.getMenuById(id);
        return ResponseEntity.ok(menuDto);
    }

    @GetMapping
    public ResponseEntity<List<MenuDto>> getAllMenus() {
        List<MenuDto> menus = menuService.getAllMenus();
        return ResponseEntity.ok(menus);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuDto> updateMenu(@PathVariable Long id, @RequestBody MenuDto menuDto) {
        MenuDto updatedMenu = menuService.updateMenu(id, menuDto);
        return ResponseEntity.ok(updatedMenu);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
        return ResponseEntity.noContent().build();
    }
}